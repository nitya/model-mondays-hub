#!/usr/bin/env node
/**
 * sync-model-catalog.mjs — Checks each tracked model in data/models/ against
 * the Azure AI catalog (ai.azure.com) to detect status changes:
 *   - "new" models older than 30 days → "active"
 *   - Models no longer accessible in catalog → "deprecated" or "retired"
 *   - Logs any models that need manual review
 *
 * Uses HEAD requests to ai.azure.com/catalog/models/<name> to verify presence.
 * No API key needed — public catalog pages return 200 for active models.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const MODELS_DIR = path.resolve("data/models");
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const today = new Date().toISOString().slice(0, 10);

async function checkCatalogPresence(catalogUrl) {
  if (!catalogUrl) return null;
  try {
    const resp = await fetch(catalogUrl, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });
    return resp.ok;
  } catch {
    return null; // network error, skip
  }
}

async function main() {
  const files = fs.readdirSync(MODELS_DIR).filter((f) => f.endsWith(".yaml"));
  let updated = 0;
  const changes = [];

  for (const file of files) {
    const filePath = path.join(MODELS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const model = yaml.load(raw, { schema: yaml.JSON_SCHEMA });

    let newStatus = model.status;
    const statusDate = model.statusUpdatedAt ? new Date(model.statusUpdatedAt) : null;

    // Rule 1: "new" models older than 30 days become "active"
    if (model.status === "new" && statusDate) {
      const age = Date.now() - statusDate.getTime();
      if (age > THIRTY_DAYS_MS) {
        newStatus = "active";
        changes.push(`${model.id}: new → active (aged out after 30 days)`);
      }
    }

    // Rule 2: Check catalog presence for active/new models
    if (["active", "new"].includes(model.status) && model.catalogUrl) {
      const isPresent = await checkCatalogPresence(model.catalogUrl);
      if (isPresent === false) {
        // Model page returns non-200 — likely deprecated or retired
        newStatus = "deprecated";
        changes.push(`${model.id}: ${model.status} → deprecated (catalog URL returned non-200)`);
      }
    }

    // Rule 3: Check publisher page presence
    if (model.publisherUrl && ["active", "new"].includes(model.status)) {
      const pubPresent = await checkCatalogPresence(model.publisherUrl);
      if (pubPresent === false) {
        changes.push(`${model.id}: WARNING — publisher page not found: ${model.publisherUrl}`);
      }
    }

    // Apply changes
    if (newStatus !== model.status) {
      model.status = newStatus;
      model.statusUpdatedAt = today;
      fs.writeFileSync(filePath, yaml.dump(model, { lineWidth: 120, noRefs: true }));
      updated++;
    } else if (!model.statusUpdatedAt || model.statusUpdatedAt !== today) {
      // Update the check timestamp even if status didn't change
      model.statusUpdatedAt = today;
      fs.writeFileSync(filePath, yaml.dump(model, { lineWidth: 120, noRefs: true }));
    }
  }

  console.log(`Checked ${files.length} model(s). Updated status for ${updated}.`);
  if (changes.length > 0) {
    console.log("\nChanges:");
    changes.forEach((c) => console.log(`  • ${c}`));
  } else {
    console.log("No status changes detected.");
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
