import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/cli/index.ts", "src/index.ts"],
  format: ["cjs", "esm"],
  sourcemap: true,
  treeshake: false,  // Disable tree shaking to preserve structure
  clean: true,
  dts: true,
  // Preserve directory structure to match upstream layout
  // This ensures getPackageSchemasDir() can resolve paths correctly
  preserveModules: true,
  unbundle: true,  // Don't bundle, keep module structure

  outExtensions({ format }) {
    if (format === "es") {
      return { js: ".mjs" };
    }
    return { js: ".cjs" }
  },
  target: false,
});