import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Monorepo vitepress Project",
  description: "A VitePress Site",
  base: '/Monorepo-project/',
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "什么是Monorepo", link: "/monorepo-explain" },
          { text: "项目开发使用", link: "/project-examples" },
          { text: "搭建一套属于自己的Monorepo Project", link: "/tutorial" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
