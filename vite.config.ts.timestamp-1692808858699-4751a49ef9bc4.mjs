// vite.config.ts
import { defineConfig } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite@4.4.5_@types+node@20.5.1_less@4.1.3/node_modules/vite/dist/node/index.js";
import react from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import dts from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-plugin-dts@3.5.1_@types+node@20.5.1_typescript@5.1.6_vite@4.4.5/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.1.6_vite@4.4.5/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "react-evefyou-ui",
  version: "1.0.2",
  description: "",
  type: "module",
  main: "./cjs/index.js",
  module: "./es/index.js",
  types: "./types/index.d.ts",
  exports: {
    ".": {
      import: "./es/index.js",
      require: "./cjs/index.js",
      types: "./types/index.d.ts"
    },
    "./windi.css": {
      import: "./css/windi.css",
      require: "./css/windi.css"
    }
  },
  files: [
    "cjs",
    "es",
    "css",
    "types"
  ],
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    "build:tsc": "tsc",
    clean: "rimraf node_modules",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:build": "rimraf es && rimraf cjs && rimraf css && rimraf dist && rimraf types",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/EvefyouFE/react-evefyou-ui.git"
  },
  keywords: [
    "react",
    "components",
    "ui",
    "evefyou"
  ],
  author: "EvefyouFE",
  license: "MIT",
  bugs: {
    url: "https://github.com/EvefyouFE/react-evefyou-ui/issues"
  },
  homepage: "https://github.com/EvefyouFE/react-evefyou-ui#readme",
  dependencies: {
    "react-evefyou-components": "^1.0.13",
    "react-evefyou-containers": "^1.0.7",
    "react-evefyou-layouts": "^1.0.0"
  },
  peerDependencies: {
    "@ant-design/icons": ">=5.0.1",
    "@dnd-kit/core": ">=6.0.8",
    "@dnd-kit/modifiers": ">=6.0.1",
    "@dnd-kit/sortable": ">=7.0.2",
    "@dnd-kit/utilities": ">=3.2.1",
    "@emotion/css": ">=11.11.0",
    "@iconify/react": ">=4.1.1",
    ahooks: ">=3.7.6",
    antd: ">=5.6.3",
    classnames: ">=2.3.2",
    moment: ">=2.29.4",
    ramda: ">=0.29.0",
    react: ">=18.2.0",
    "react-dom": ">=18.2.0",
    "react-intl": ">=6.4.4",
    "react-router": ">=6.10.0",
    "react-router-dom": ">=6.10.0",
    "react-draggable": ">=4.4.5",
    "react-evefyou-hooks": ">=1.0.7",
    "react-evefyou-router": ">=1.0.3",
    nprogress: ">=0.2.0",
    uuid: ">=9.0.0"
  },
  devDependencies: {
    "@ant-design/colors": "^7.0.0",
    "@rollup/plugin-commonjs": "^25.0.4",
    "@rollup/plugin-node-resolve": "^15.2.1",
    "@types/node": "^20.5.1",
    "@types/ramda": "^0.29.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@types/uuid": "^9.0.1",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    consola: "^3.2.3",
    cssnano: "^6.0.1",
    eslint: "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    less: "^4.1.3",
    postcss: "^8.4.23",
    "postcss-cli": "^10.1.0",
    "postcss-html": "^1.5.0",
    "postcss-less": "^6.0.0",
    "postcss-preset-env": "^8.3.2",
    rimraf: "^5.0.1",
    tslib: "^2.6.1",
    typescript: "^5.1.6",
    vite: "^4.4.5",
    "vite-plugin-dts": "^3.5.1",
    "vite-plugin-lib-inject-css": "^1.2.1",
    "vite-plugin-windicss": "^1.9.0",
    "vite-tsconfig-paths": "^4.2.0",
    windicss: "^3.5.6"
  }
};

// vite.config.ts
import cssnanoPlugin from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/cssnano@6.0.1_postcss@8.4.23/node_modules/cssnano/src/index.js";
import postcssPresetEnv from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/postcss-preset-env@8.3.2_postcss@8.4.23/node_modules/postcss-preset-env/dist/index.mjs";
import WindiCSS from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-plugin-windicss@1.9.0_vite@4.4.5/node_modules/vite-plugin-windicss/dist/index.mjs";
import { nodeResolve } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/@rollup+plugin-node-resolve@15.2.1/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
import commonjs from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/@rollup+plugin-commonjs@25.0.4/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import { libInjectCss } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-plugin-lib-inject-css@1.2.1_vite@4.4.5/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import { is } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/es/index.js";
var __vite_injected_original_dirname = "C:\\projects\\frontend\\evefyou\\react-evefyou-ui";
var pathResolve = (v) => path.resolve(__vite_injected_original_dirname, v);
var excludeExternalPackages = [...Object.keys(package_default.dependencies)];
var externalPackages = [...Object.keys(package_default.peerDependencies)];
var regexOfPackages = externalPackages.map((packageName) => new RegExp(`^${packageName}(\\/.*)?`));
console.log("externalPackages", externalPackages);
console.log("regexOfPackages", regexOfPackages);
var entries = {
  "index": pathResolve("ui/index.ts"),
  "components": pathResolve("ui/components/index.ts"),
  "BasicButton": pathResolve("ui/components/BasicButton.ts"),
  "BasicDropdown": pathResolve("ui/components/BasicDropdown.ts"),
  "BasicHelp": pathResolve("ui/components/BasicHelp.ts"),
  "BasicMenu": pathResolve("ui/components/BasicMenu.ts"),
  "BasicModal": pathResolve("ui/components/BasicModal.ts"),
  "BasicScroll": pathResolve("ui/components/BasicScroll.ts"),
  "BasicTable": pathResolve("ui/components/BasicTable.ts"),
  "BasicIcon": pathResolve("ui/components/BasicIcon.ts"),
  "BasicTitle": pathResolve("ui/components/BasicTitle.ts"),
  "BasicBreadcrumb": pathResolve("ui/components/BasicBreadcrumb.ts"),
  "BasicFallback": pathResolve("ui/components/BasicFallback.ts"),
  "BasicNProgress": pathResolve("ui/components/BasicNProgress.ts"),
  "BasicResult": pathResolve("ui/components/BasicResult.ts")
};
var allEntryFiles = Object.keys(entries);
var otherEntryFiles = allEntryFiles.filter((e) => e !== "index");
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      { find: /^~/, replacement: "" }
    ]
  },
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: [
          "./ui"
        ],
        fileExtensions: ["tsx", "ts", "js", "jsx", "css"]
      }
    }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      // rollupTypes: true,
      outDir: ["types"],
      beforeWriteFile: (filePath, content) => {
        const entryDFile = otherEntryFiles.map((e) => e.concat(".d.ts")).find((e) => filePath.includes(e));
        return entryDFile ? false : { filePath, content };
      }
    }),
    libInjectCss({
      build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        cssCodeSplit: true,
        outDir: "."
      },
      entry: entries,
      fileName: (format, entryName) => {
        return entryName === "index" ? `${format}/index.js` : entryName.includes("_") ? `${format}/locale/${entryName}.js` : `${format}/[name]/index.js`;
      },
      name: "react-evefyou-ui",
      formats: ["es", "cjs"],
      rollupOptions: {
        output: {
          // manualChunks(id) {
          //   console.log('id', id)
          //   if (id.includes("node_modules")) {
          //     return id.toString().split("node_modules/")[1].split("/")[0].toString()
          //   }
          // },
          chunkFileNames: (chunkInfo) => {
            console.log("chunkInfo", chunkInfo);
            if (allEntryFiles.findIndex((e) => e === chunkInfo.name) !== -1)
              return "[format]/components/[name]/[name].js";
            return otherEntryFiles.reduce(
              (acc, cur) => !chunkInfo.isEntry && chunkInfo.moduleIds.findIndex((s) => s.includes(cur)) !== -1 ? `[format]/${cur}/other.js` : acc,
              "[format]/_common/[name]/[name].js"
            );
          },
          assetFileNames: (assetInfo) => {
            return is(String, assetInfo.source) && assetInfo.source.includes("h-full") ? "[ext]/windi.[ext]" : "[ext]/[name].[ext]";
          }
        },
        plugins: [
          nodeResolve(),
          commonjs()
        ],
        external: (source, importer, isResolved) => {
          const isPeerPkg = !!regexOfPackages.find((r) => r.test(source));
          console.log("external", source, importer, isResolved, isPeerPkg);
          if (excludeExternalPackages.find((p) => source.includes(p)))
            return false;
          if (isPeerPkg)
            return true;
          return false;
        }
      }
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("ui/_common/styles/variables/index.less")}";`,
          "primary-color": "#0960bd",
          "text-color": "#c9d1d9",
          "text-color-base": "#000000d9"
        }
      }
    },
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: "default"
        }),
        postcssPresetEnv({})
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcZnJvbnRlbmRcXFxcZXZlZnlvdVxcXFxyZWFjdC1ldmVmeW91LXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxmcm9udGVuZFxcXFxldmVmeW91XFxcXHJlYWN0LWV2ZWZ5b3UtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2Zyb250ZW5kL2V2ZWZ5b3UvcmVhY3QtZXZlZnlvdS11aS92aXRlLmNvbmZpZy50c1wiOy8qXG4gKiBAQXV0aG9yOiBFdmVmeW91RkUvZXZlZlxuICogQERhdGU6IDIwMjMtMDgtMjMgMTQ6NDg6MzFcbiAqIEBGaWxlUGF0aDogXFxyZWFjdC1ldmVmeW91LXVpXFx2aXRlLmNvbmZpZy50c1xuICogQERlc2NyaXB0aW9uOiBcbiAqIEV2ZXJ5b25lIGlzIGNvbWluZyB0byB0aGUgd29ybGQgaSBsaXZlIGluLCBhcyBpIGFtIGdvaW5nIHRvIHRoZSB3b3JsZCBsaXZlcyBmb3IgeW91LiBcdTRFQkFcdTRFQkFcdTc2ODZcdTVGODBcdTYyMTFcdTRFMTZcdTc1NENcdUZGMENcdTYyMTFcdTRFM0FcdTRFMTZcdTc1NENcdTRFMkRcdTRFQkFcdTRFQkFcdTMwMDJcbiAqIENvcHlyaWdodCAoYykgMjAyMyBieSBFdmVmeW91RkUvZXZlZiwgQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCBjc3NuYW5vUGx1Z2luIGZyb20gXCJjc3NuYW5vXCI7XG5pbXBvcnQgcG9zdGNzc1ByZXNldEVudiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnO1xuaW1wb3J0IFdpbmRpQ1NTIGZyb20gJ3ZpdGUtcGx1Z2luLXdpbmRpY3NzJztcbmltcG9ydCB7IG5vZGVSZXNvbHZlIH0gZnJvbSAnQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlJztcbmltcG9ydCBjb21tb25qcyBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tY29tbW9uanNcIjtcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJztcbmltcG9ydCB7IGlzIH0gZnJvbSBcInJhbWRhXCI7XG5cbmNvbnN0IHBhdGhSZXNvbHZlID0gKHY6IHN0cmluZykgPT4gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgdilcblxuY29uc3QgZXhjbHVkZUV4dGVybmFsUGFja2FnZXMgPSBbLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyldXG5cbmNvbnN0IGV4dGVybmFsUGFja2FnZXMgPSBbLi4uT2JqZWN0LmtleXMocGtnLnBlZXJEZXBlbmRlbmNpZXMpXVxuY29uc3QgcmVnZXhPZlBhY2thZ2VzID0gZXh0ZXJuYWxQYWNrYWdlc1xuICAubWFwKHBhY2thZ2VOYW1lID0+IG5ldyBSZWdFeHAoYF4ke3BhY2thZ2VOYW1lfShcXFxcLy4qKT9gKSk7XG5cbmNvbnNvbGUubG9nKCdleHRlcm5hbFBhY2thZ2VzJywgZXh0ZXJuYWxQYWNrYWdlcylcbmNvbnNvbGUubG9nKCdyZWdleE9mUGFja2FnZXMnLCByZWdleE9mUGFja2FnZXMpXG5cbmNvbnN0IGVudHJpZXMgPSB7XG4gICdpbmRleCc6IHBhdGhSZXNvbHZlKCd1aS9pbmRleC50cycpLFxuICAnY29tcG9uZW50cyc6IHBhdGhSZXNvbHZlKCd1aS9jb21wb25lbnRzL2luZGV4LnRzJyksXG4gICdCYXNpY0J1dHRvbic6IHBhdGhSZXNvbHZlKCd1aS9jb21wb25lbnRzL0Jhc2ljQnV0dG9uLnRzJyksXG4gICdCYXNpY0Ryb3Bkb3duJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNEcm9wZG93bi50cycpLFxuICAnQmFzaWNIZWxwJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNIZWxwLnRzJyksXG4gICdCYXNpY01lbnUnOiBwYXRoUmVzb2x2ZSgndWkvY29tcG9uZW50cy9CYXNpY01lbnUudHMnKSxcbiAgJ0Jhc2ljTW9kYWwnOiBwYXRoUmVzb2x2ZSgndWkvY29tcG9uZW50cy9CYXNpY01vZGFsLnRzJyksXG4gICdCYXNpY1Njcm9sbCc6IHBhdGhSZXNvbHZlKCd1aS9jb21wb25lbnRzL0Jhc2ljU2Nyb2xsLnRzJyksXG4gICdCYXNpY1RhYmxlJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNUYWJsZS50cycpLFxuICAnQmFzaWNJY29uJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNJY29uLnRzJyksXG4gICdCYXNpY1RpdGxlJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNUaXRsZS50cycpLFxuICAnQmFzaWNCcmVhZGNydW1iJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNCcmVhZGNydW1iLnRzJyksXG4gICdCYXNpY0ZhbGxiYWNrJzogcGF0aFJlc29sdmUoJ3VpL2NvbXBvbmVudHMvQmFzaWNGYWxsYmFjay50cycpLFxuICAnQmFzaWNOUHJvZ3Jlc3MnOiBwYXRoUmVzb2x2ZSgndWkvY29tcG9uZW50cy9CYXNpY05Qcm9ncmVzcy50cycpLFxuICAnQmFzaWNSZXN1bHQnOiBwYXRoUmVzb2x2ZSgndWkvY29tcG9uZW50cy9CYXNpY1Jlc3VsdC50cycpLFxufVxuY29uc3QgYWxsRW50cnlGaWxlcyA9IE9iamVjdC5rZXlzKGVudHJpZXMpXG5jb25zdCBvdGhlckVudHJ5RmlsZXMgPSBhbGxFbnRyeUZpbGVzLmZpbHRlcihlID0+IGUgIT09ICdpbmRleCcpXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiAvXn4vLCByZXBsYWNlbWVudDogJycgfVxuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFdpbmRpQ1NTKHtcbiAgICAgIHNjYW46IHtcbiAgICAgICAgZGlyczogW1xuICAgICAgICAgICcuL3VpJyxcbiAgICAgICAgXSxcbiAgICAgICAgZmlsZUV4dGVuc2lvbnM6IFsndHN4JywgJ3RzJywgJ2pzJywgJ2pzeCcsICdjc3MnXVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBkdHMoe1xuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgIC8vIHJvbGx1cFR5cGVzOiB0cnVlLFxuICAgICAgb3V0RGlyOiBbJ3R5cGVzJ10sXG4gICAgICBiZWZvcmVXcml0ZUZpbGU6IChmaWxlUGF0aCwgY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeURGaWxlID0gb3RoZXJFbnRyeUZpbGVzXG4gICAgICAgICAgLm1hcChlID0+IGUuY29uY2F0KCcuZC50cycpKVxuICAgICAgICAgIC5maW5kKGUgPT4gZmlsZVBhdGguaW5jbHVkZXMoZSkpXG4gICAgICAgIHJldHVybiBlbnRyeURGaWxlID8gZmFsc2UgOiB7IGZpbGVQYXRoLCBjb250ZW50IH1cbiAgICAgIH0sXG4gICAgfSksXG4gICAgbGliSW5qZWN0Q3NzKHtcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgICAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgICAgIG91dERpcjogJy4nLFxuICAgICAgfSxcbiAgICAgIGVudHJ5OiBlbnRyaWVzLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQsIGVudHJ5TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZW50cnlOYW1lID09PSAnaW5kZXgnXG4gICAgICAgICAgPyBgJHtmb3JtYXR9L2luZGV4LmpzYFxuICAgICAgICAgIDogZW50cnlOYW1lLmluY2x1ZGVzKCdfJylcbiAgICAgICAgICAgID8gYCR7Zm9ybWF0fS9sb2NhbGUvJHtlbnRyeU5hbWV9LmpzYFxuICAgICAgICAgICAgOiBgJHtmb3JtYXR9L1tuYW1lXS9pbmRleC5qc2BcbiAgICAgIH0sXG4gICAgICBuYW1lOiAncmVhY3QtZXZlZnlvdS11aScsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiXSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgLy8gbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnaWQnLCBpZClcbiAgICAgICAgICAvLyAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xuICAgICAgICAgIC8vICAgICByZXR1cm4gaWQudG9TdHJpbmcoKS5zcGxpdChcIm5vZGVfbW9kdWxlcy9cIilbMV0uc3BsaXQoXCIvXCIpWzBdLnRvU3RyaW5nKClcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAoY2h1bmtJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2h1bmtJbmZvJywgY2h1bmtJbmZvKVxuICAgICAgICAgICAgaWYgKGFsbEVudHJ5RmlsZXMuZmluZEluZGV4KGUgPT4gZSA9PT0gY2h1bmtJbmZvLm5hbWUpICE9PSAtMSkgcmV0dXJuICdbZm9ybWF0XS9jb21wb25lbnRzL1tuYW1lXS9bbmFtZV0uanMnXG4gICAgICAgICAgICByZXR1cm4gb3RoZXJFbnRyeUZpbGVzLnJlZHVjZShcbiAgICAgICAgICAgICAgKGFjYywgY3VyKSA9PiAhY2h1bmtJbmZvLmlzRW50cnkgJiYgY2h1bmtJbmZvLm1vZHVsZUlkcy5maW5kSW5kZXgocyA9PiBzLmluY2x1ZGVzKGN1cikpICE9PSAtMVxuICAgICAgICAgICAgICAgID8gYFtmb3JtYXRdLyR7Y3VyfS9vdGhlci5qc2AgOiBhY2MsXG4gICAgICAgICAgICAgICdbZm9ybWF0XS9fY29tbW9uL1tuYW1lXS9bbmFtZV0uanMnXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Fzc2V0SW5mbycsIGFzc2V0SW5mbylcbiAgICAgICAgICAgIHJldHVybiBpcyhTdHJpbmcsIGFzc2V0SW5mby5zb3VyY2UpICYmIGFzc2V0SW5mby5zb3VyY2UuaW5jbHVkZXMoJ2gtZnVsbCcpXG4gICAgICAgICAgICAgID8gJ1tleHRdL3dpbmRpLltleHRdJ1xuICAgICAgICAgICAgICA6ICdbZXh0XS9bbmFtZV0uW2V4dF0nXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIG5vZGVSZXNvbHZlKCksXG4gICAgICAgICAgY29tbW9uanMoKVxuICAgICAgICBdLFxuICAgICAgICBleHRlcm5hbDogKHNvdXJjZTogc3RyaW5nLCBpbXBvcnRlcjogc3RyaW5nIHwgdW5kZWZpbmVkLCBpc1Jlc29sdmVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNQZWVyUGtnID0gISFyZWdleE9mUGFja2FnZXMuZmluZChyID0+IHIudGVzdChzb3VyY2UpKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdleHRlcm5hbCcsIHNvdXJjZSwgaW1wb3J0ZXIsIGlzUmVzb2x2ZWQsIGlzUGVlclBrZylcbiAgICAgICAgICBpZiAoZXhjbHVkZUV4dGVybmFsUGFja2FnZXMuZmluZChwID0+IHNvdXJjZS5pbmNsdWRlcyhwKSkpIHJldHVybiBmYWxzZVxuICAgICAgICAgIGlmIChpc1BlZXJQa2cpIHJldHVybiB0cnVlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjc3M6IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJ1xuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBtb2RpZnlWYXJzOiB7XG4gICAgICAgICAgaGFjazogYHRydWU7IEBpbXBvcnQgKHJlZmVyZW5jZSkgXCIke3BhdGgucmVzb2x2ZSgndWkvX2NvbW1vbi9zdHlsZXMvdmFyaWFibGVzL2luZGV4Lmxlc3MnKX1cIjtgLFxuICAgICAgICAgICdwcmltYXJ5LWNvbG9yJzogJyMwOTYwYmQnLFxuICAgICAgICAgICd0ZXh0LWNvbG9yJzogJyNjOWQxZDknLFxuICAgICAgICAgICd0ZXh0LWNvbG9yLWJhc2UnOiAnIzAwMDAwMGQ5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIGNzc25hbm9QbHVnaW4oe1xuICAgICAgICAgIHByZXNldDogJ2RlZmF1bHQnLFxuICAgICAgICB9KSBhcyBhbnksXG4gICAgICAgIHBvc3Rjc3NQcmVzZXRFbnYoe1xuXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuICB9LFxufSlcbiIsICJ7XG4gIFwibmFtZVwiOiBcInJlYWN0LWV2ZWZ5b3UtdWlcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiLi9janMvaW5kZXguanNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2VzL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL3R5cGVzL2luZGV4LmQudHNcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi5cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vdHlwZXMvaW5kZXguZC50c1wiXG4gICAgfSxcbiAgICBcIi4vd2luZGkuY3NzXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9jc3Mvd2luZGkuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nzcy93aW5kaS5jc3NcIlxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJjanNcIixcbiAgICBcImVzXCIsXG4gICAgXCJjc3NcIixcbiAgICBcInR5cGVzXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkOnRzY1wiOiBcInRzY1wiLFxuICAgIFwiY2xlYW5cIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzXCIsXG4gICAgXCJjbGVhbjpjYWNoZVwiOiBcInJpbXJhZiBub2RlX21vZHVsZXMvLmNhY2hlLyAmJiByaW1yYWYgbm9kZV9tb2R1bGVzLy52aXRlXCIsXG4gICAgXCJjbGVhbjpidWlsZFwiOiBcInJpbXJhZiBlcyAmJiByaW1yYWYgY2pzICYmIHJpbXJhZiBjc3MgJiYgcmltcmFmIGRpc3QgJiYgcmltcmFmIHR5cGVzXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL0V2ZWZ5b3VGRS9yZWFjdC1ldmVmeW91LXVpLmdpdFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwicmVhY3RcIixcbiAgICBcImNvbXBvbmVudHNcIixcbiAgICBcInVpXCIsXG4gICAgXCJldmVmeW91XCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJFdmVmeW91RkVcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRXZlZnlvdUZFL3JlYWN0LWV2ZWZ5b3UtdWkvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9FdmVmeW91RkUvcmVhY3QtZXZlZnlvdS11aSNyZWFkbWVcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3QtZXZlZnlvdS1jb21wb25lbnRzXCI6IFwiXjEuMC4xM1wiLFxuICAgIFwicmVhY3QtZXZlZnlvdS1jb250YWluZXJzXCI6IFwiXjEuMC43XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWxheW91dHNcIjogXCJeMS4wLjBcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudC1kZXNpZ24vaWNvbnNcIjogXCI+PTUuMC4xXCIsXG4gICAgXCJAZG5kLWtpdC9jb3JlXCI6IFwiPj02LjAuOFwiLFxuICAgIFwiQGRuZC1raXQvbW9kaWZpZXJzXCI6IFwiPj02LjAuMVwiLFxuICAgIFwiQGRuZC1raXQvc29ydGFibGVcIjogXCI+PTcuMC4yXCIsXG4gICAgXCJAZG5kLWtpdC91dGlsaXRpZXNcIjogXCI+PTMuMi4xXCIsXG4gICAgXCJAZW1vdGlvbi9jc3NcIjogXCI+PTExLjExLjBcIixcbiAgICBcIkBpY29uaWZ5L3JlYWN0XCI6IFwiPj00LjEuMVwiLFxuICAgIFwiYWhvb2tzXCI6IFwiPj0zLjcuNlwiLFxuICAgIFwiYW50ZFwiOiBcIj49NS42LjNcIixcbiAgICBcImNsYXNzbmFtZXNcIjogXCI+PTIuMy4yXCIsXG4gICAgXCJtb21lbnRcIjogXCI+PTIuMjkuNFwiLFxuICAgIFwicmFtZGFcIjogXCI+PTAuMjkuMFwiLFxuICAgIFwicmVhY3RcIjogXCI+PTE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiPj0xOC4yLjBcIixcbiAgICBcInJlYWN0LWludGxcIjogXCI+PTYuNC40XCIsXG4gICAgXCJyZWFjdC1yb3V0ZXJcIjogXCI+PTYuMTAuMFwiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIj49Ni4xMC4wXCIsXG4gICAgXCJyZWFjdC1kcmFnZ2FibGVcIjogXCI+PTQuNC41XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWhvb2tzXCI6IFwiPj0xLjAuN1wiLFxuICAgIFwicmVhY3QtZXZlZnlvdS1yb3V0ZXJcIjogXCI+PTEuMC4zXCIsXG4gICAgXCJucHJvZ3Jlc3NcIjogXCI+PTAuMi4wXCIsXG4gICAgXCJ1dWlkXCI6IFwiPj05LjAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhbnQtZGVzaWduL2NvbG9yc1wiOiBcIl43LjAuMFwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tY29tbW9uanNcIjogXCJeMjUuMC40XCIsXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmVcIjogXCJeMTUuMi4xXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC41LjFcIixcbiAgICBcIkB0eXBlcy9yYW1kYVwiOiBcIl4wLjI5LjBcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjE1XCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjIuN1wiLFxuICAgIFwiQHR5cGVzL3V1aWRcIjogXCJeOS4wLjFcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjAuM1wiLFxuICAgIFwiY29uc29sYVwiOiBcIl4zLjIuM1wiLFxuICAgIFwiY3NzbmFub1wiOiBcIl42LjAuMVwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNDUuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoXCI6IFwiXjAuNC4zXCIsXG4gICAgXCJsZXNzXCI6IFwiXjQuMS4zXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4yM1wiLFxuICAgIFwicG9zdGNzcy1jbGlcIjogXCJeMTAuMS4wXCIsXG4gICAgXCJwb3N0Y3NzLWh0bWxcIjogXCJeMS41LjBcIixcbiAgICBcInBvc3Rjc3MtbGVzc1wiOiBcIl42LjAuMFwiLFxuICAgIFwicG9zdGNzcy1wcmVzZXQtZW52XCI6IFwiXjguMy4yXCIsXG4gICAgXCJyaW1yYWZcIjogXCJeNS4wLjFcIixcbiAgICBcInRzbGliXCI6IFwiXjIuNi4xXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMS42XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuNC41XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy41LjFcIixcbiAgICBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI6IFwiXjEuMi4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi13aW5kaWNzc1wiOiBcIl4xLjkuMFwiLFxuICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl40LjIuMFwiLFxuICAgIFwid2luZGljc3NcIjogXCJeMy41LjZcIlxuICB9XG59XG4iXSwKICAi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
