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
        header: "Outfit",
        body: "Noto Sans SC",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f6f7f4",
          lightgray: "#dde3dd",
          gray: "#7b8a84",
          darkgray: "#33403b",
          dark: "#15211d",
          secondary: "#0f766e",
          tertiary: "#f97316",
          highlight: "rgba(15, 118, 110, 0.10)",
          textHighlight: "#ffd59a99",
        },
        darkMode: {
          light: "#0b1412",
          lightgray: "#1d2a26",
          gray: "#7a9189",
          darkgray: "#d8e0db",
          dark: "#f4f7f4",
          secondary: "#34d399",
          tertiary: "#fb923c",
          highlight: "rgba(52, 211, 153, 0.12)",
          textHighlight: "#fb923c55",
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
