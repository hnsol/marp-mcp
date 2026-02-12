import type { ThemeDefinition } from "../types.js";
import { titleLayout } from "../gaia/layouts/title.js";
import { sectionLayout } from "../gaia/layouts/section.js";
import { listLayout } from "../gaia/layouts/list.js";
import { tableLayout } from "../gaia/layouts/table.js";
import { imageRightLayout } from "../gaia/layouts/image-right.js";
import { imageCenterLayout } from "../gaia/layouts/image-center.js";
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
    "image-right": imageRightLayout,
    "image-center": imageCenterLayout,
  },
};
