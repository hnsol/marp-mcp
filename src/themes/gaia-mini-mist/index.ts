import type { ThemeDefinition } from "../types.js";
import { titleLayout } from "./layouts/title.js";
import { sectionLayout } from "./layouts/section.js";
import { listLayout } from "./layouts/list.js";
import { tableLayout } from "./layouts/table.js";
import { twoColumnLayout } from "./layouts/two-column.js";
import { imageRightLayout } from "./layouts/image-right.js";
import { imageCenterLayout } from "./layouts/image-center.js";
import { gaiaMiniMistCss } from "./css.js";

export const gaiaMiniMistTheme: ThemeDefinition = {
  name: "gaia-mini-mist",
  description: "Gaia Mini Mist custom theme with Gaia-compatible layouts",
  css: gaiaMiniMistCss,
  layouts: {
    title: titleLayout,
    section: sectionLayout,
    list: listLayout,
    table: tableLayout,
    "two-column": twoColumnLayout,
    "image-right": imageRightLayout,
    "image-center": imageCenterLayout,
  },
};
