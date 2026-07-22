#!/usr/bin/env node
/**
 * enrich-episodes.mjs — Adds `resources` (Microsoft Learn links) and `summary`
 * (segment-organized key points) to published episode YAML files.
 *
 * Resources are mapped from episode tags to curated Microsoft Learn URLs.
 * Summaries are generated from transcripts when available.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { EPISODES_DIR } from "./lib/paths.mjs";

// Microsoft Learn resource map by tag
const LEARN_RESOURCES = {
  "foundry-toolkit": [
    { title: "Microsoft Foundry Models overview", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/models/overview", type: "overview" },
    { title: "Deploy models in Foundry portal", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/models/deploy-in-portal", type: "tutorial" },
    { title: "Quickstart: Microsoft Foundry SDK", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/sdks/quickstart", type: "quickstart" },
  ],
  "mcp-servers": [
    { title: "Build Agents using MCP on Azure", url: "https://learn.microsoft.com/en-us/azure/developer/ai/intro-agents-mcp", type: "overview" },
    { title: "Use MCP Servers in VS Code Copilot", url: "https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers", type: "tutorial" },
    { title: "Extend agents with MCP (Copilot Studio)", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp", type: "documentation" },
  ],
  "github-copilot": [
    { title: "GitHub Copilot Agents", url: "https://learn.microsoft.com/en-us/agent-framework/agents/providers/github-copilot", type: "overview" },
    { title: "GitHub Copilot documentation", url: "https://learn.microsoft.com/en-us/copilot/github-copilot", type: "documentation" },
  ],
  "agent-365": [
    { title: "Microsoft 365 Copilot extensibility", url: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/", type: "overview" },
    { title: "Build agents for Microsoft 365", url: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/build-agents", type: "tutorial" },
  ],
  "work-iq": [
    { title: "Microsoft 365 Copilot overview", url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview", type: "overview" },
  ],
  "hugging-face": [
    { title: "Hugging Face models in Foundry", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/models/collections/hugging-face", type: "documentation" },
    { title: "Deploy Hugging Face models on Azure", url: "https://learn.microsoft.com/en-us/azure/machine-learning/how-to-deploy-models-from-huggingface", type: "tutorial" },
  ],
  "cohere": [
    { title: "Cohere models in Azure AI Foundry", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/models/collections/cohere", type: "documentation" },
    { title: "Deploy Cohere Command models", url: "https://learn.microsoft.com/en-us/azure/ai/studio/how-to/deploy-models-cohere-command", type: "tutorial" },
  ],
  "fireworks-ai": [
    { title: "Fireworks AI on Azure Marketplace", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/models/collections/fireworks-ai", type: "documentation" },
    { title: "Models from partners and community", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/models/overview#models-from-partners-and-community", type: "overview" },
  ],
  "observability": [
    { title: "Monitor AI applications", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/how-to/monitor-applications", type: "documentation" },
    { title: "Evaluate AI models in Foundry", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/how-to/evaluate-models", type: "tutorial" },
  ],
};

// Default resources for episodes with no matching tags
const DEFAULT_RESOURCES = [
  { title: "Azure AI Foundry documentation", url: "https://learn.microsoft.com/en-us/azure/ai/foundry/", type: "documentation" },
  { title: "Model Mondays series (RSVP)", url: "https://developer.microsoft.com/reactor/series/S-1485", type: "overview" },
];

// Simple summaries from transcript content (for episodes with transcripts)
function generateSummaryFromTranscript(transcriptPath, episodeData) {
  if (!transcriptPath || !fs.existsSync(transcriptPath)) return null;
  const content = fs.readFileSync(transcriptPath, "utf8");
  const lines = content.split("\n").filter(l => l.startsWith("**") && l.includes("—"));

  // Extract key topic mentions
  const segments = episodeData.segmentType || [];
  const summary = {};

  // Look for highlights based on content keywords
  const highlights = [];
  if (content.includes("model") || content.includes("Model")) highlights.push("Discussion of model selection and deployment strategies");
  if (content.includes("demo") || content.includes("Demo")) highlights.push("Live demonstration of platform capabilities");
  if (content.includes("open source") || content.includes("open-source")) highlights.push("Open source model ecosystem and community contributions");
  if (content.includes("enterprise") || content.includes("Enterprise")) highlights.push("Enterprise-grade AI deployment considerations");
  if (content.includes("agent") || content.includes("Agent")) highlights.push("AI agent architecture and agentic workflows");
  if (highlights.length > 0) summary.highlights = highlights.slice(0, 4);

  if (segments.includes("tech-spotlight")) {
    const tech = [];
    if (content.includes("API") || content.includes("SDK")) tech.push("API/SDK integration patterns for model consumption");
    if (content.includes("inference") || content.includes("Inference")) tech.push("Model inference optimization and scaling");
    if (content.includes("fine-tun") || content.includes("Fine-tun")) tech.push("Fine-tuning workflows and customization");
    if (content.includes("MCP") || content.includes("protocol")) tech.push("Model Context Protocol for tool integration");
    if (tech.length > 0) summary.techSpotlights = tech.slice(0, 3);
  }

  if (segments.includes("partner-spotlight")) {
    const partners = [];
    if (content.includes("Fireworks")) partners.push("Fireworks AI: Running open models at scale without managing infrastructure");
    if (content.includes("Cohere")) partners.push("Cohere: Enterprise RAG and language understanding capabilities");
    if (content.includes("Hugging Face")) partners.push("Hugging Face: Open model hub integration with Azure");
    if (partners.length > 0) summary.partnerSpotlights = partners.slice(0, 3);
  }

  if (segments.includes("customer-story")) {
    summary.customerStories = ["Real-world enterprise AI deployment case study"];
  }

  return Object.keys(summary).length > 0 ? summary : null;
}

// Main
const files = fs.readdirSync(EPISODES_DIR).filter(f => f.endsWith(".yaml"));
let enriched = 0;

for (const file of files) {
  const filePath = path.join(EPISODES_DIR, file);
  const raw = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(raw, { schema: yaml.JSON_SCHEMA });

  if (data.status !== "published") continue;
  if (data.resources && data.resources.length > 0) continue; // already enriched

  // Build resources from tags
  const tags = data.tags || [];
  const resources = [];
  const seen = new Set();
  for (const tag of tags) {
    const tagResources = LEARN_RESOURCES[tag] || [];
    for (const r of tagResources) {
      if (!seen.has(r.url)) {
        resources.push(r);
        seen.add(r.url);
      }
    }
  }
  // Cap at 5, add defaults if empty
  const finalResources = resources.length > 0 ? resources.slice(0, 5) : DEFAULT_RESOURCES.slice(0, 2);

  // Generate summary from transcript
  let summary = null;
  if (data.transcriptPath) {
    const tPath = path.resolve(EPISODES_DIR, "..", "..", data.transcriptPath);
    summary = generateSummaryFromTranscript(tPath, data);
  }

  // Update YAML
  data.resources = finalResources;
  if (summary) data.summary = summary;

  // Preserve comments at top
  const headerMatch = raw.match(/^(#[^\n]*\n)*/);
  const header = headerMatch ? headerMatch[0] : "";
  const yamlStr = yaml.dump(data, { lineWidth: 120, noRefs: true, quotingType: "'", forceQuotes: false });
  fs.writeFileSync(filePath, header + yamlStr);
  enriched++;
}

console.log(`Enriched ${enriched} episode(s) with resources and summaries.`);
