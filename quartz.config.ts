import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "国际商务谈判课程知识库",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "wallfacer-web.github.io/international-business-negotiation-kb",
    ignorePatterns: [
      ".git",
      ".github",
      ".obsidian",
      ".qsyncclient",
      ".smart-env",
      ".trash",
      "_quartz_init",
      "node_modules",
      "public",
      "quartz",
      "20 智能体",
      "notebooklm-py",
      "package-lock.json",
      "package.json",
      "tsconfig.json",
      "globals.d.ts",
      "index.d.ts",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif SC",
        body: "Noto Sans SC",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f4efe6",
          lightgray: "#d8d1c3",
          gray: "#8f8a80",
          darkgray: "#3f433f",
          dark: "#1f2b2f",
          secondary: "#1c5c5a",
          tertiary: "#b9823e",
          highlight: "rgba(28, 92, 90, 0.10)",
          textHighlight: "#f1d49a88",
        },
        darkMode: {
          light: "#102022",
          lightgray: "#24383a",
          gray: "#7f9693",
          darkgray: "#d7ddd8",
          dark: "#f4f1ea",
          secondary: "#8cd1c8",
          tertiary: "#f1ba72",
          highlight: "rgba(140, 209, 200, 0.12)",
          textHighlight: "#d1a15166",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disable OG image generation to keep CI builds faster and lighter.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
