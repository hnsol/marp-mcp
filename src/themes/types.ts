export interface SlideLayout {
  name: string;
  description: string;
  className?: string;
  params: {
    [key: string]: {
      type: "string" | "array" | "number";
      description: string;
      required: boolean;
      maxLength?: number;
      maxItems?: number;
    };
  };
  template: (params: Record<string, unknown>) => string;
}

export type ThemeName =
  | "academic"
  | "default"
  | "gaia"
  | "gaia-mini-mist"
  | "uncover";

export interface ThemeDefinition {
  name: ThemeName;
  description: string;
  css?: string;
  layouts: Record<string, SlideLayout>;
}

export type StyleName = "default" | "rich";

export interface StyleDefinition {
  name: StyleName;
  description: string;
  compatibleThemes: ThemeName[];
  css: string;
  layouts: Record<string, SlideLayout>;
}
