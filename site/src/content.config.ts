// site/src/content.config.ts
//
// Wires Astro content collections directly to the repo's data-as-truth
// directories: ../data (YAML records) and ../content (Markdown posts).
// Zod schemas here intentionally mirror data/schema/*.schema.json so the
// site fails to build if data drifts from what it expects (in addition to
// `npm run validate`'s JSON Schema check).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const speakers = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "../data/speakers" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string().optional(),
    company: z.string().optional(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    role: z.enum(["host", "guest", "producer"]).default("guest"),
    links: z
      .object({
        website: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        twitter: z.string().url().optional(),
        github: z.string().url().optional(),
        mastodon: z.string().url().optional(),
      })
      .catchall(z.string().url())
      .optional(),
    provenance: z.string().optional(),
  }),
});

const seasons = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "../data/seasons" }),
  schema: z.object({
    id: z.string(),
    number: z.number(),
    title: z.string(),
    theme: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    breaks: z
      .array(z.object({ date: z.coerce.date(), reason: z.string() }))
      .optional(),
    status: z.enum(["upcoming", "active", "completed"]).default("upcoming"),
    playlistUrl: z.string().url().optional(),
    provenance: z.string().optional(),
  }),
});

const tags = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "../data/tags" }),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    category: z.enum(["model", "technology", "partner"]),
    description: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const episodes = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "../data/episodes" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    season: z.string(),
    publishDate: z.coerce.date(),
    status: z.enum(["placeholder", "scheduled", "published"]).default("placeholder"),
    youtubeVideoId: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
    segmentType: z.array(z.string()).default([]),
    speakers: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    duration: z.number().optional(),
    metrics: z
      .object({
        views: z.number().nullable().optional(),
        likes: z.number().nullable().optional(),
        comments: z.number().nullable().optional(),
        updatedAt: z.coerce.date().optional(),
      })
      .optional(),
    transcriptPath: z.string().optional(),
    chapters: z.array(z.object({ time: z.string(), label: z.string() })).optional(),
    resources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      type: z.enum(["documentation", "tutorial", "quickstart", "overview", "sample"]).default("documentation"),
    })).optional(),
    summary: z.object({
      highlights: z.array(z.string()).optional(),
      techSpotlights: z.array(z.string()).optional(),
      customerStories: z.array(z.string()).optional(),
      partnerSpotlights: z.array(z.string()).optional(),
    }).optional(),
    provenance: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../content/blog" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    summary: z.string().optional(),
    episodes: z.array(z.string()).default([]),
  }),
});

// Transcripts are plain Markdown (not YAML) but still live under data/ as a
// source-of-truth record. Exposed as its own collection (keyed by episode
// id/filename) so episode pages can link/render them without manual fs reads.
const transcripts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../data/transcripts" }),
  schema: z.object({}).passthrough(),
});

const models = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "../data/models" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    provider: z.string(),
    family: z.string().optional(),
    category: z.enum(["language", "reasoning", "vision", "multimodal", "embedding", "speech", "image-generation", "code", "forecasting", "small-language"]).optional(),
    description: z.string().optional(),
    catalogUrl: z.string().url().optional(),
    publisherUrl: z.string().url().optional(),
    providerUrl: z.string().url().optional(),
    learnUrl: z.string().url().optional(),
    parameters: z.string().optional(),
    openSource: z.boolean().optional(),
    status: z.enum(["active", "new", "deprecated", "retired"]).default("active"),
    statusUpdatedAt: z.coerce.date().optional(),
    episodes: z.array(z.string()).default([]),
    provenance: z.string().optional(),
  }),
});

export const collections = { speakers, seasons, tags, episodes, blog, transcripts, models };
