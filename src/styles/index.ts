import { defaultStyle } from "./default/index.js";
import { richStyle } from "./rich/index.js";
import { gaiaMiniMistStyle } from "./gaia-mini-mist/index.js";
import type { StyleDefinition, StyleName } from "../themes/types.js";

const styles = {
  default: defaultStyle,
  rich: richStyle,
  "gaia-mini-mist": gaiaMiniMistStyle,
} satisfies Record<StyleName, StyleDefinition>;

let activeStyle: StyleDefinition = defaultStyle;

export function getActiveStyle(): StyleDefinition {
  return activeStyle;
}

export function setActiveStyle(styleName: StyleName): void {
  activeStyle = styles[styleName];
}

export function getStyle(styleName: string): StyleDefinition | undefined {
  const normalized = styleName.toLowerCase().trim() as StyleName;
  return styles[normalized];
}

export function getAvailableStyleNames(): StyleName[] {
  return Object.keys(styles) as StyleName[];
}

export { styles };
