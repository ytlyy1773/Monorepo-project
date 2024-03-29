import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Monorepo vitepress Project",
  description: "A VitePress Site",
  base: '/Monorepo-project/',
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "什么是Monorepo", link: "/monorepo-explain" },
          { text: "开发的 npm 库使用", link: "/project-examples" },
          { text: "搭建一套属于自己的Monorepo Project", link: "/tutorial" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jiangwan1773/Monorepo-project" },
    ],
  },
});
