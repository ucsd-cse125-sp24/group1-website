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
  {
    title = "Page",
    description = "something about the page",
    base = ".",
    image = "../images/bee.png",
  }
) {
  const template = await fs.readFile("./content/template.html", "utf-8");
  const markdown = await fs.readFile(source, "utf-8");
  await fs.writeFile(
    dest,
    template
      .replaceAll("{{title}}", title)
      .replaceAll("{{description}}", description)
      .replaceAll("{{image}}", image)
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
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/spec-preview.png",
});

await build("./content/weekly-reports/week-02.md", "./w/2.html", {
  title: "Week 2 Report",
  description: "Concept art, physics, and model rendering!",
  base: "..",
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/dev/fish.png",
});
await build("./content/weekly-reports/week-03.md", "./w/3.html", {
  title: "Week 3 Report",
  description: "Lighting, entities, and more shapes!",
  base: "..",
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/dev/lighting-fish2.png",
});
await build("./content/weekly-reports/week-04.md", "./w/4.html", {
  title: "Week 4 Report",
  description: "Particles, first-person mode, and Blender models!",
  base: "..",
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/dev/donut.png",
});
await build("./content/weekly-reports/week-05.md", "./w/5.html", {
  title: "Week 5 Report",
  description: "Outlines and more particles!",
  base: "..",
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/dev/outline.png",
});
await build("./content/weekly-reports/week-06.md", "./w/6.html", {
  title: "Week 6 Report",
  description: "Holding items, tool and player models, and map collisions!",
  base: "..",
  image:
    "https://cse125.ucsd.edu/2024/cse125g1/images/dev/spinning-model-poster.png",
});
await build("./content/weekly-reports/week-07.md", "./w/7.html", {
  title: "Week 7 Report",
  description: "Throw items to your friends, and more!",
  base: "..",
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/dev/smooth-lighting.png",
});

await build("./content/weekly-reports/week-08.md", "./w/8.html", {
  title: "Week 8 Report",
  description: "aaaa",
  base: "..",
  image: "https://cse125.ucsd.edu/2024/cse125g1/images/dev/smooth-lighting.png",
});
