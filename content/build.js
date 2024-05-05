import fs from "fs/promises";
import { Marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedSmartypants } from "marked-smartypants";
import markedFootnote from "marked-footnote";

const marked = new Marked();
marked.use(gfmHeadingId());
marked.use(markedSmartypants());
marked.use(markedFootnote({ refMarkers: true }));

/**
 * @param {string} source
 * @param {string} dest
 */
async function build(
  source,
  dest,
  { title = "Page", description = "something about the page", base = "." }
) {
  const template = await fs.readFile("./content/template.html", "utf-8");
  const markdown = await fs.readFile(source, "utf-8");
  await fs.writeFile(
    dest,
    template
      .replaceAll("{{title}}", title)
      .replaceAll("{{description}}", description)
      .replaceAll("{{base}}", base)
      .replaceAll(
        "{{content}}",
        `\n<!-- This file was generated from ${source}. Avoid editing this file directly because it might get overwritten. -->\n${marked.parse(markdown.replaceAll("../../images/", "../images/"))}`
      )
  );
}

await build("./content/spec.md", "./spec.html", {
  title: "Project Specification",
  description:
    "We will build a fantasy game about having to frantically craft weapons and armor to defeat the boss pressing down on the protective bubble surrounding them!",
});

await build("./content/weekly-reports/week-02.md", "./w/2.html", {
  title: "Week 2 Report",
  description: "Concept art, physics, and model rendering!",
  base: "..",
});
await build("./content/weekly-reports/week-03.md", "./w/3.html", {
  title: "Week 3 Report",
  description: "Lighting, entities, and more shapes!",
  base: "..",
});
await build("./content/weekly-reports/week-04.md", "./w/4.html", {
  title: "Week 4 Report",
  description: "Particles, first-person mode, and Blender models!",
  base: "..",
});
await build("./content/weekly-reports/week-05.md", "./w/5.html", {
  title: "Week 5 Report",
  description: "Outlines and more particles!",
  base: "..",
});
