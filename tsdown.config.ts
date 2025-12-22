import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/cli/index.ts", "src/index.ts"],
  format: ["cjs", "esm"],
  sourcemap: true,
  treeshake: true,
  clean: true,
  dts: true,

  outExtensions({ format }) {
    if (format === "es") {
      return { js: ".mjs" };
    }
    return { js: ".cjs" }
  },
  target: false,
});