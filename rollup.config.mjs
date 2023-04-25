import copy from "rollup-plugin-copy";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "./index.ts",
  treeshake: false,
  output: [
    {
      dir: "./dist",
      format: "es",
      preserveModules: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    copy({
      targets: [
        { src: ["package.json", "LICENSE", "README.md"], dest: "dist" },
      ],
    }),
  ],
};
