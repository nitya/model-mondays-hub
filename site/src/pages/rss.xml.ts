// site/src/pages/rss.xml.ts
//
// RSS 2.0 newsletter feed generated from the blog content collection.
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  // context.site is the bare origin (e.g. https://nitya.github.io/); combine
  // with the configured `base` so links work under the GitHub Pages project
  // path (e.g. /model-mondays-hub/).
  const base = import.meta.env.BASE_URL.replace(/\/*$/, "/"); // ensure trailing slash
  const siteUrl = new URL(base, context.site ?? "https://nitya.github.io/");

  return rss({
    title: "Model Mondays Hub",
    description:
      "Weekly recaps and previews from Model Mondays — Microsoft's AI livestream/podcast series.",
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary ?? "",
      pubDate: post.data.publishDate,
      link: `blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
