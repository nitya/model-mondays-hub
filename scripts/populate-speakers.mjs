#!/usr/bin/env node
// Populate speaker references in episodes and create missing speaker YAML files.
// Data sourced from microsoft/model-mondays READMEs.

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const SPEAKERS_DIR = "data/speakers";
const EPISODES_DIR = "data/episodes";

// Speaker registry: id -> { name, title?, company?, role? }
const SPEAKER_DATA = {
  "nitya-narasimhan": { name: "Nitya Narasimhan", title: "AI Advocacy Lead", company: "Microsoft", role: "host" },
  "lee-stott": { name: "Lee Stott", title: "Principal Cloud Advocate", company: "Microsoft", role: "host" },
  "bethany-jepchumba": { name: "Bethany Jepchumba", title: "Cloud Advocate", company: "Microsoft", role: "host" },
  "korey-stegared-pace": { name: "Korey Stegared-Pace", title: "Cloud Advocate", company: "Microsoft", role: "host" },
  "carlotta-castelluccio": { name: "Carlotta Castelluccio", title: "Cloud Advocate", company: "Microsoft", role: "host" },
  "april-speight": { name: "April Speight", title: "Cloud Advocate", company: "Microsoft", role: "host" },

  // S1 speakers
  "jennifer-marsman": { name: "Jennifer Marsman", company: "Microsoft", role: "guest" },
  "neel-gokhale": { name: "Neel Gokhale", company: "Cohere", role: "guest" },
  "ken-hoge": { name: "Ken Hoge", company: "Stability AI", role: "guest" },
  "rong-lu": { name: "Rong Lu", title: "Principal PM", company: "Microsoft", role: "guest" },
  "khuyen-tran": { name: "Khuyen Tran", title: "Developer Advocate", company: "Nixtla", role: "guest" },

  // S2 speakers
  "marlene-mhangami": { name: "Marlene Mhangami", company: "Microsoft", role: "guest" },
  "den-delimarsky": { name: "Den Delimarsky", company: "Microsoft", role: "guest" },
  "mojan-javaheripi": { name: "Mojan Javaheripi", company: "Microsoft", role: "guest" },
  "leo-yao": { name: "Leo Yao", company: "Microsoft", role: "guest" },
  "dave-voutila": { name: "Dave Voutila", company: "Microsoft", role: "guest" },
  "seokjin-han": { name: "SeokJin Han", company: "Microsoft", role: "guest" },
  "saumil-shrivastava": { name: "Saumil Shrivastava", company: "Microsoft", role: "guest" },
  "sandeep-sen": { name: "Sandeep Sen", company: "Microsoft", role: "guest" },
  "maanav-dalal": { name: "Maanav Dalal", company: "Microsoft", role: "guest" },
  "mona-whalin": { name: "Mona Whalin", company: "Microsoft", role: "guest" },
  "utkarsh-maheswari": { name: "Utkarsh Maheswari", company: "Microsoft", role: "guest" },
  "han-che": { name: "Han Che", company: "Microsoft", role: "guest" },
  "jeff-boudier": { name: "Jeff Boudier", title: "VP of Product", company: "Hugging Face", role: "guest" },

  // S2 customer story speakers
  "steve-frederickson": { name: "Steve Frederickson", title: "Head of Product", company: "Capacity", role: "guest" },
  "zachary-meierhofer": { name: "Zachary Meierhofer", title: "Product Manager", company: "Capacity", role: "guest" },
  "kurt-demaagd": { name: "Kurt DeMaagd", title: "Chief AI Officer", company: "SightMachine", role: "guest" },
  "sukrit-chatterjee": { name: "Sukrit Chatterjee", title: "AI Research Engineer", company: "Atomicwork", role: "guest" },

  // S3 speakers
  "sanjeev-jagtap": { name: "Sanjeev Jagtap", title: "PMM, Azure AI", company: "Microsoft", role: "guest" },
  "minsoo-thigpen": { name: "Minsoo Thigpen", company: "Microsoft", role: "guest" },
  "shawn-henry": { name: "Shawn Henry", company: "Microsoft", role: "guest" },
  "guy-gregory": { name: "Guy Gregory", company: "Microsoft", role: "guest" },
  "william-liang": { name: "William Liang", company: "Microsoft", role: "guest" },
  "amir-zur": { name: "Amir Zur", company: "Microsoft", role: "guest" },
  "yash-lara": { name: "Yash Lara", company: "Microsoft", role: "guest" },
  "bala-venkataraman": { name: "Bala Venkataraman", company: "Microsoft", role: "guest" },
  "sebastian-kohlmeier": { name: "Sebastian Kohlmeier", company: "Microsoft", role: "guest" },
  "farzad-sunavala": { name: "Farzad Sunavala", company: "Microsoft", role: "guest" },
  "srikumar-nair": { name: "Srikumar Nair", company: "Microsoft", role: "guest" },
  "peli-de-halleux": { name: "Peli de Halleux", company: "Microsoft", role: "guest" },

  // Existing speakers from initial curation
  "filisha-shah": { name: "Filisha Shah", company: "Fireworks AI", role: "guest" },
  "jesse-cohere": { name: "Jesse Feinman", company: "Cohere", role: "guest" },
  "junjie-li": { name: "Junjie Li", company: "Microsoft", role: "guest" },
  "shaunak-godbole": { name: "Shaunak Godbole", company: "Microsoft", role: "guest" },
};

// Episode -> speakers mapping (by episode file ID pattern)
const EPISODE_SPEAKERS = {
  "s1-e00": ["nitya-narasimhan"],
  "s1-e01": ["nitya-narasimhan"],
  "s1-e02": ["nitya-narasimhan", "jennifer-marsman"],
  "s1-e03": ["nitya-narasimhan", "neel-gokhale"],
  "s1-e04": ["nitya-narasimhan", "ken-hoge"],
  "s1-e05": ["nitya-narasimhan"],
  "s1-e06": ["nitya-narasimhan", "rong-lu"],
  "s1-e07": ["nitya-narasimhan"],
  "s1-e08": ["nitya-narasimhan", "khuyen-tran"],

  "s2-e01": ["nitya-narasimhan", "marlene-mhangami"],
  "s2-e02": ["nitya-narasimhan", "den-delimarsky"],
  "s2-e03": ["nitya-narasimhan", "mojan-javaheripi"],
  "s2-e04": ["nitya-narasimhan", "leo-yao"],
  "s2-e05": ["nitya-narasimhan", "dave-voutila"],
  "s2-e06": ["nitya-narasimhan", "seokjin-han", "saumil-shrivastava", "steve-frederickson", "zachary-meierhofer"],
  "s2-e07": ["nitya-narasimhan", "sandeep-sen", "kurt-demaagd"],
  "s2-e08": ["nitya-narasimhan", "maanav-dalal"],
  "s2-e09": ["nitya-narasimhan", "mona-whalin", "sukrit-chatterjee"],
  "s2-e10": ["nitya-narasimhan"],
  "s2-e11": ["nitya-narasimhan", "utkarsh-maheswari"],
  "s2-e12": ["nitya-narasimhan", "han-che"],
  "s2-e13": ["nitya-narasimhan", "jeff-boudier"],

  "s3-e01": ["nitya-narasimhan", "sanjeev-jagtap"],
  "s3-e02": ["nitya-narasimhan", "minsoo-thigpen"],
  "s3-e03": ["lee-stott", "maanav-dalal"],
  "s3-e04": ["korey-stegared-pace", "shawn-henry"],
  "s3-e05": ["nitya-narasimhan", "guy-gregory"],
  "s3-e06": ["bethany-jepchumba", "dave-voutila", "guy-gregory"],
  "s3-e07": ["bethany-jepchumba", "william-liang"],
  "s3-e08": ["nitya-narasimhan", "amir-zur"],
  "s3-e09": ["nitya-narasimhan", "yash-lara"],
  "s3-e10": ["carlotta-castelluccio", "bala-venkataraman"],
  "s3-e11": ["nitya-narasimhan", "sebastian-kohlmeier"],
  "s3-e12": ["april-speight", "rong-lu"],
  "s3-e13": ["carlotta-castelluccio", "farzad-sunavala"],
  "s3-e14": ["lee-stott", "seokjin-han", "filisha-shah"],
  "s3-e15": ["korey-stegared-pace", "srikumar-nair", "jeff-boudier"],
};

// --- 1. Create/update speaker YAML files ---
let created = 0, updated = 0;
for (const [id, data] of Object.entries(SPEAKER_DATA)) {
  const fp = path.join(SPEAKERS_DIR, `${id}.yaml`);
  if (fs.existsSync(fp)) {
    // Update name if needed
    const content = fs.readFileSync(fp, "utf8");
    const doc = yaml.load(content, { schema: yaml.JSON_SCHEMA });
    let changed = false;
    if (doc.name !== data.name) { doc.name = data.name; changed = true; }
    if (data.title && !doc.title) { doc.title = data.title; changed = true; }
    if (data.company && !doc.company) { doc.company = data.company; changed = true; }
    if (data.role && doc.role !== data.role) { doc.role = data.role; changed = true; }
    if (changed) {
      fs.writeFileSync(fp, yaml.dump(doc, { lineWidth: 80, quotingType: "'", forceQuotes: false }));
      updated++;
      console.log(`  Updated ${id}.yaml`);
    }
  } else {
    const doc = { id, ...data };
    fs.writeFileSync(fp, yaml.dump(doc, { lineWidth: 80, quotingType: "'", forceQuotes: false }));
    created++;
    console.log(`  Created ${id}.yaml`);
  }
}
console.log(`\nSpeakers: ${created} created, ${updated} updated\n`);

// --- 2. Add speaker refs to episodes ---
let epUpdated = 0;
for (const file of fs.readdirSync(EPISODES_DIR).filter(f => f.endsWith(".yaml"))) {
  // Extract episode key (e.g. "s3-e01" from "s3-e01-2025-12-02.yaml")
  const match = file.match(/^(s\d+-e\d+)/);
  if (!match) continue;
  const key = match[1];
  const speakers = EPISODE_SPEAKERS[key];
  if (!speakers) continue;

  const fp = path.join(EPISODES_DIR, file);
  let content = fs.readFileSync(fp, "utf8");

  // Replace empty speakers array or add speakers
  if (content.match(/^speakers:\s*\[\s*\]\s*$/m) || content.match(/^speakers:\s*$/m)) {
    const speakerYaml = speakers.map(s => `  - ${s}`).join("\n");
    content = content.replace(/^speakers:.*$/m, `speakers:\n${speakerYaml}`);
    fs.writeFileSync(fp, content);
    epUpdated++;
  } else if (!content.match(/^speakers:/m)) {
    // No speakers field at all — add after tags or after season
    const speakerYaml = `speakers:\n${speakers.map(s => `  - ${s}`).join("\n")}`;
    if (content.match(/^tags:/m)) {
      // Find end of tags array and add after
      content = content.replace(/^(tags:[\s\S]*?)(\n\w)/m, `$1\n${speakerYaml}$2`);
    } else {
      content = content.replace(/^(season: .+)$/m, `$1\n${speakerYaml}`);
    }
    fs.writeFileSync(fp, content);
    epUpdated++;
  }
}
console.log(`Episodes updated with speakers: ${epUpdated}`);
