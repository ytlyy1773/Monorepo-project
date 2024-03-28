import { defineConfig } from "vite";
import { buildPlugin } from "vite-plugin-build";

export default defineConfig({
  build: {
    target: "es2015",
  },
  plugins: [
    buildPlugin({
      fileBuild: { inputFolder: "utils", emitDeclaration: true },
    }),
  ],
});
