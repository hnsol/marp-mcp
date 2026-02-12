import type { StyleDefinition } from "../../themes/types.js";
import { gaiaMiniMistCss } from "./css.js";

export const gaiaMiniMistStyle: StyleDefinition = {
  name: "gaia-mini-mist",
  description: "Soft mist visual style derived from 260212_GaiaMiniMist.css",
  compatibleThemes: ["gaia"],
  css: gaiaMiniMistCss,
  layouts: {},
};
