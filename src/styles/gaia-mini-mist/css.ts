/**
 * 260212_gaia-mini-mist style CSS
 */
export const gaiaMiniMistCss = String.raw`@charset "UTF-8";
/*!
 * Marp / Marpit theme: gaia-mini-mist
 *
 * Base: Gaia theme (Marp official)
 * Original author: Yuki Hattori
 * Customized by: hann-solo
 *
 * Concept:
 * - BMW Mini "Pepper White & Deep Blue" inspired palette.
 * - High-contrast design for non-coders with a signature orange accent.
 * - Created for consistent branding across professional presentations.
 *
 * Maintenance:
 * - Basic colors are defined in :root.
 * - Accent: #f2bb49 (Classic Mini Orange)
 *
 * Recommended:
 * - Aspect: 4:3 960px 720px
 * - Code highlight: highlight.js (sunburst)
 *
 * Version: 0.2.0
 * Last updated: 2026-02-12
 *
 * @theme gaia-mini-mist
 * @auto-scaling true
 * @size 16:9 1280px 720px
 * @size 4:3 960px 720px
 */
@import 'https://fonts.bunny.net/css?family=Lato:400,900|Roboto+Mono:400,700&display=swap';
@import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/sunburst.min.css');
@import url("https://use.fontawesome.com/releases/v5.11.0/css/all.css");
:root {
  /* 1. 基本色の定義 */

  /* ストライプ色 */
  --stripe-main:   rgba(50, 70, 90, 0.08);
  --stripe-invert: rgba(230, 230, 230, 0.1);
  --stripe-gaia:   rgba(150, 180, 220, 0.08);

  /* first draft by mikan */
  --color-white:     #ffffff;
  --color-dark:      #131820;
  --color-light:     #f8f7e9;
  --color-primary:   #1c2a5d;
  --color-secondary: #459AA6;
  --color-accent:    #f2bb49;

}

/* 2. セマンティックカラーの定義 */
section {
  --color-background: var(--color-white);      /* 背景色 */
  --color-foreground: var(--color-dark);       /* 文字色 */
  --color-dimmed:     var(--color-accent);     /* 補助色 */
  --color-highlight:  var(--color-secondary);  /* ハイライト色 */
  --color-background-stripe: var(--stripe-main);   /* メインテーマの表ストライプ */
}

section header, section footer {}

section cite {}

section blockquote {
  --color-background: var(--color-accent);
}

/* 3. テーマごとの変数上書き */

/* Gaiaテーマ */
section:where(.gaia) {
  --color-background: var(--color-primary);
  --color-foreground: var(--color-light);
  --color-dimmed:     var(--color-secondary);
  --color-highlight:  var(--color-accent);
  --color-background-stripe: var(--stripae-gaia);   /* Gaiaテーマの表ストライプ */
}

section:where(.gaia) header, section:where(.gaia) footer {}

/* Coverテーマ */
section:where(.cover) {
  --color-background: var(--color-secondary);
  --color-foreground: var(--color-primary);
  --color-highlight:  var(--color-accent);
}

/* Referenceテーマ */
section:where(.reference) {
  --color-background: var(--color-accent);
  --color-foreground: var(--color-dark);
  --color-dimmed:     var(--color-light);
  --color-highlight:  var(--color-white);
}

/* Invertテーマ */
section:where(.invert) {
  --color-background: var(--color-dark);
  --color-foreground: var(--color-light);
  --color-dimmed:     var(--color-primary);
  --color-highlight:  var(--color-secondary);
  --color-background-stripe: var(--stripe-invert);
}

section:where(.invert) header, section:where(.invert) footer {}

/* 4. セクション全体のスタイル */

/* タイポグラフィ */
h1, h2, h3, h4, h5, h6 {
  margin: 0.5em 0 0;
}

h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong {
  font-weight: inherit;
}

h1::part(auto-scaling),
h2::part(auto-scaling),
h3::part(auto-scaling),
h4::part(auto-scaling),
h5::part(auto-scaling),
h6::part(auto-scaling) {
  max-height: 580px;
}

h1 {
  font-feature-settings: "palt";
  /* font-size: 1.8em; } */
  font-size: 2rem;
  line-height: calc(0.25rem * 12); }

h2 {
  font-feature-settings: "palt";
  /* font-size: 1.5em; } */
  font-size: 1.75rem;
  line-height: calc(0.25rem * 11); }

h3 {
  font-feature-settings: "palt";
  /* font-size: 1.3em; } */
  font-size: 1.5rem;
  line-height: calc(0.25rem * 9); }

h4 {
  font-feature-settings: "palt";
  /* font-size: 1.1em; } */
  font-size: 1.3125rem;
  line-height: calc(0.25rem * 8); }

h5 {
  font-feature-settings: "palt";
  /* font-size: 1em; } */
  font-size: 1.125rem;
  line-height: calc(0.25rem * 7); }

h6 {
  font-feature-settings: "palt";
  /* font-size: 0.9em; } */
  font-size: 0.875rem;
  line-height: calc(0.25rem * 5); }

p, blockquote {
  font-size: 1rem;
  line-height: calc(0.25rem * 6);
}

/* 段落間のバーティカルリズム */
* + h2 { margin-top: calc(0.25rem * 6); }
* + h3 { margin-top: calc(0.25rem * 5); }
* + h4 { margin-top: calc(0.25rem * 4); }
* + h5 { margin-top: calc(0.25rem * 3); }
* + h6 { margin-top: calc(0.25rem * 2); }
* + p  { margin-top: calc(0.25rem * 1); }

ul > li, ol > li {
  /* margin: 0.3em 0 0 0; */
  margin: 0.25em 0 0 0;
}
ul > li > p, ol > li > p {
  /* margin: 0.6em 0 0 0; */
  margin: 0.25em 0 0 0;
}

code {
  display: inline-block;
  font-family: "Hiragino Kaku Gothic ProN", sans-serif;
  font-size: 1.0em;
  letter-spacing: 0;
  margin: -0.1em 0.15em;
  padding: 0.1em 0.2em;
  vertical-align: baseline;
  border-radius: 4px; /* 角の丸み */
}

pre {
  display: block;
  margin: 1em 0 0 0;
  min-height: 1em;
  overflow: visible;
  border-radius: 6px; /* 角の丸み */
}
pre code {
  box-sizing: border-box;
  margin: 0;
  min-width: 100%;
  padding: 0.5em;
  /* font-size: 0.7em; } */
  font-size: 1.0em;
}
pre::part(auto-scaling) {
  max-height: calc(580px - 1em);
}

/* 引用ブロック */
blockquote {
  /* margin: 1em 0 0; */
  margin: 1em 0 0 0;
  padding: 0 1em;
  position: relative;
  /* background: var(--color-dimmed); */
  background: var(--color-background);
}
blockquote::after, blockquote::before {
  content: "“";
  display: block;
  font-family: "Times New Roman", serif;
  font-weight: bold;
  /* color: #e6394a; */
  position: absolute;
}
blockquote::before {
  top: 0;
  left: 0;
}
blockquote::after {
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
}
blockquote > *:first-child {
  margin-top: 0;
}

mark {
  background: transparent;
}

/* テーブル */
table {
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1em 0 0 0;
}
table th,
table td {
  padding: 0.2em 0.4em;
  border-width: 1px;
  border-style: solid;
}

/* ヘッダー、フッター、セクションのスタイル */
header, footer, section::after {
  box-sizing: border-box;
  font-size: 66%;
  height: 70px;
  line-height: 50px;
  overflow: hidden;
  padding: 10px 25px;
  position: absolute;
}

header {
  left: 0;
  right: 0;
  top: 0;
}

footer {
  left: 0;
  right: 0;
  bottom: 0;
}


section {
  background-color: var(--color-background);
  background-image: linear-gradient(135deg, rgba(136, 136, 136, 0), rgba(136, 136, 136, 0.02) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05));
  color: var(--color-foreground);
  font-size: 32px;
  font-family: "Hiragino Kaku Gothic ProN", sans-serif;
  height: 720px;
  line-height: 1.35;
  letter-spacing: 1.25px;
  padding: 70px;
  width: 1280px;
  word-wrap: break-word;
}

section::after {
  right: 0;
  bottom: 0;
  font-size: 80%;
}

section a, section mark {
  color: var(--color-highlight);
}

section code {
  background: var(--color-dimmed);
  color: var(--color-foreground);
}

section h1 strong,
section h2 strong,
section h3 strong,
section h4 strong,
section h5 strong,
section h6 strong {
  color: var(--color-highlight);
}

/* preはコードブロック */
section pre {
  /* background: var(--color-foreground); */
  background: var(--color-dimmed);
}

section pre > code {
  background: transparent;
}

section section::after {
  color: var(--color-dimmed);
}

section blockquote::before,
section blockquote::after {
  color: var(--color-foreground);
}

section table th,
section table td {
  border-color: var(--color-foreground);
}

section table thead th {
  background: var(--color-foreground);
  color: var(--color-background);
}

section table tbody > tr:nth-child(odd) td,
section table tbody > tr:nth-child(odd) th {
  background: var(--color-background-stripe, transparent);
}

section > *:first-child,
section > header:first-child + * {
  margin-top: 0;
}

section cite {
  font-style: normal;
  font-size: 50%;
  float: right;
}

/* リードのスタイル */
section:where(.lead) {
  place-content: safe center center;
  /* Definitions for classic bhavior: Users can adopt flex centering by tweaking style \`section.lead { display: flex }\` */
  flex-flow: column nowrap;
  align-items: stretch;
  /* stylelint-disable-next-line no-descending-specificity */
}
section:where(.lead) h1,
section:where(.lead) h2,
section:where(.lead) h3,
section:where(.lead) h4,
section:where(.lead) h5,
section:where(.lead) h6 {
  text-align: center;
}
section:where(.lead) p {
  text-align: center;
}
section:where(.lead) blockquote > h1,
section:where(.lead) blockquote > h2,
section:where(.lead) blockquote > h3,
section:where(.lead) blockquote > h4,
section:where(.lead) blockquote > h5,
section:where(.lead) blockquote > h6,
section:where(.lead) blockquote > p {
  text-align: left;
}
section:where(.lead) ul > li > p,
section:where(.lead) ol > li > p {
  text-align: left;
}
section:where(.lead) table {
  margin-left: auto;
  margin-right: auto;
}

/* coverクラスのh2のみ袋文字に */
section:where(.cover) h2 {
  text-shadow: 1px 1px 0 var(--color-light),
  -1px  1px 0 var(--color-light),
   1px -1px 0 var(--color-light),
  -1px -1px 0 var(--color-light);
}


img[alt~="center"] {
  display: block;
  margin: 0 auto; }
`;
