import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Monorepo vitepress Project",
  description: "基于 Monorepo 开发策略 使用vitepress开发的单体项目仓库",
  base: '/Monorepo-project/',
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    outline: {
      label: "目录",
    },
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "什么是Monorepo", link: "/monorepo-explain" },
          { text: "开发的 npm 库使用", link: "/project-examples" },
          { text: "搭建一套属于自己的Monorepo Project", link: "/tutorial" }
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jiangwan1773/Monorepo-project" },
    ],
  },
});
