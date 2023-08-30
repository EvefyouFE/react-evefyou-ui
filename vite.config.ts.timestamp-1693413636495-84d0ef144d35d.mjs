// vite.config.ts
import { defineConfig } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite@4.4.5_@types+node@20.5.1_less@4.1.3/node_modules/vite/dist/node/index.js";
import react from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import dts from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-plugin-dts@3.5.1_@types+node@20.5.1_typescript@5.1.6_vite@4.4.5/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.1.6_vite@4.4.5/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "react-evefyou-ui",
  version: "1.0.17",
  description: "",
  type: "module",
  main: "./cjs/index.js",
  module: "./es/index.js",
  types: "./index.d.ts",
  exports: {
    ".": {
      import: "./es/index.js",
      require: "./cjs/index.js",
      types: "./index.d.ts"
    },
    "./locale/zh_CN": {
      import: "./es/locale/zh_CN/index.js",
      require: "./cjs/locale/zh_CN/index.js",
      types: "./locale/zh_CN.d.ts"
    },
    "./locale/en_US": {
      import: "./es/locale/en_US/index.js",
      require: "./cjs/locale/en_US/index.js",
      types: "./locale/en_US.d.ts"
    },
    "./components": {
      import: "./es/components/index.js",
      require: "./cjs/components/index.js",
      types: "./index.d.ts"
    },
    "./layouts": {
      import: "./es/layouts/index.js",
      require: "./cjs/layouts/index.js",
      types: "./index.d.ts"
    },
    "./containers": {
      import: "./es/containers/index.js",
      require: "./cjs/containers/index.js",
      types: "./index.d.ts"
    },
    "./layouts/AdminLayout": {
      import: "./es/layouts/AdminLayout/index.js",
      require: "./cjs/layouts/AdminLayout/index.js",
      types: "./index.d.ts"
    },
    "./layouts/CommonLayout": {
      import: "./es/layouts/CommonLayout/index.js",
      require: "./cjs/layouts/CommonLayout/index.js",
      types: "./index.d.ts"
    },
    "./layouts/BasicFooter": {
      import: "./es/layouts/BasicFooter/index.js",
      require: "./cjs/layouts/BasicFooter/index.js",
      types: "./index.d.ts"
    },
    "./layouts/BasicHeader": {
      import: "./es/layouts/BasicHeader/index.js",
      require: "./cjs/layouts/BasicHeader/index.js",
      types: "./index.d.ts"
    },
    "./layouts/BasicSider": {
      import: "./es/layouts/BasicSider/index.js",
      require: "./cjs/layouts/BasicSider/index.js",
      types: "./index.d.ts"
    },
    "./containers/BasicContainer": {
      import: "./es/containers/BasicContainer/index.js",
      require: "./cjs/containers/BasicContainer/index.js",
      types: "./index.d.ts"
    },
    "./containers/TabContainer": {
      import: "./es/containers/TabContainer/index.js",
      require: "./cjs/containers/TabContainer/index.js",
      types: "./index.d.ts"
    },
    "./containers/TableContainer": {
      import: "./es/containers/TableContainer/index.js",
      require: "./cjs/containers/TableContainer/index.js",
      types: "./index.d.ts"
    },
    "./containers/KeepAliveContainer": {
      import: "./es/containers/KeepAliveContainer/index.js",
      require: "./cjs/containers/KeepAliveContainer/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicBreadcrumb": {
      import: "./es/components/BasicBreadcrumb/index.js",
      require: "./cjs/components/BasicBreadcrumb/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicButton": {
      import: "./es/components/BasicButton/index.js",
      require: "./cjs/components/BasicButton/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicDropdown": {
      import: "./es/components/BasicDropdown/index.js",
      require: "./cjs/components/BasicDropdown/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicForm": {
      import: "./es/components/BasicForm/index.js",
      require: "./cjs/components/BasicForm/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicHelp": {
      import: "./es/components/BasicHelp/index.js",
      require: "./cjs/components/BasicHelp/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicIcon": {
      import: "./es/components/BasicIcon/index.js",
      require: "./cjs/components/BasicIcon/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicMenu": {
      import: "./es/components/BasicMenu/index.js",
      require: "./cjs/components/BasicMenu/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicModal": {
      import: "./es/components/BasicModal/index.js",
      require: "./cjs/components/BasicModal/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicPopButton": {
      import: "./es/components/BasicPopButton/index.js",
      require: "./cjs/components/BasicPopButton/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicScroll": {
      import: "./es/components/BasicScroll/index.js",
      require: "./cjs/components/BasicScroll/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicTable": {
      import: "./es/components/BasicTable/index.js",
      require: "./cjs/components/BasicTable/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicTitle": {
      import: "./es/components/BasicTitle/index.js",
      require: "./cjs/components/BasicTitle/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicFallback": {
      import: "./es/components/BasicFallback/index.js",
      require: "./cjs/components/BasicFallback/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicNProgress": {
      import: "./es/components/BasicNProgress/index.js",
      require: "./cjs/components/BasicNProgress/index.js",
      types: "./index.d.ts"
    },
    "./components/BasicResult": {
      import: "./es/components/BasicResult/index.js",
      require: "./cjs/components/BasicResult/index.js",
      types: "./index.d.ts"
    }
  },
  files: [
    "cjs",
    "es",
    "css",
    "index.d.ts",
    "locale"
  ],
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    "build:tsc": "tsc",
    clean: "rimraf node_modules",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:build": "rimraf es && rimraf cjs && rimraf css && rimraf dist && rimraf locale",
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
    "react-evefyou-components": "^1.0.35",
    "react-evefyou-containers": "^1.0.25",
    "react-evefyou-layouts": "^1.0.11"
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
    nprogress: ">=0.2.0",
    ramda: ">=0.29.0",
    react: ">=18.2.0",
    "react-dom": ">=18.2.0",
    "react-draggable": ">=4.4.5",
    "react-evefyou-common": ">=1.0.8",
    "react-evefyou-hooks": ">=1.0.17",
    "react-evefyou-router": ">=1.0.12",
    "react-intl": ">=6.4.4",
    "react-router": ">=6.10.0",
    "react-router-dom": ">=6.10.0",
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
import { libInjectCss } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/vite-plugin-lib-inject-css@1.2.1_vite@4.4.5/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import { includes } from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/es/index.js";
import nodeResolve from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/@rollup+plugin-node-resolve@15.2.1/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
import commonjs from "file:///C:/projects/frontend/evefyou/react-evefyou-ui/node_modules/.pnpm/@rollup+plugin-commonjs@25.0.4/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import fs from "fs";
var __vite_injected_original_dirname = "C:\\projects\\frontend\\evefyou\\react-evefyou-ui";
var pathResolve = (v) => path.resolve(__vite_injected_original_dirname, v);
var depPackages = [...Object.keys(package_default.dependencies)];
var externalPackages = [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies)];
var regexOfPackages = externalPackages.map((packageName) => new RegExp(`^${packageName}(\\/.*)?`));
var entries = {
  "index": pathResolve("ui/index.ts"),
  "locale/en_US": pathResolve("ui/locale/en_US.ts"),
  "locale/zh_CN": pathResolve("ui/locale/zh_CN.ts")
};
var level1s = ["components", "containers", "layouts"];
var locales = Object.keys(package_default.exports).filter((e) => e.includes("locale")).map((e) => e.split("./")[1]);
var components = Object.keys(package_default.exports).filter((e) => e !== "." && !e.includes("locale")).map((e) => e.split("./")[1]).filter((e) => !includes(e, level1s));
console.log("level1s", level1s);
console.log("components", components);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: ["./ui"],
        fileExtensions: ["tsx", "ts"]
      }
    }),
    tsconfigPaths(),
    dts({
      // insertTypesEntry: true,
      rollupTypes: true,
      afterBuild: () => {
        const directoryPath = ".";
        const regexToDelete = /_\w+\.d\.ts$/;
        fs.readdirSync(directoryPath).forEach((file) => {
          const filePath = path.join(directoryPath, file);
          if (regexToDelete.test(file)) {
            try {
              fs.unlinkSync(filePath);
              console.log(`Deleted file: ${filePath}`);
            } catch (err) {
              console.error(`Error deleting file: ${err}`);
            }
          }
        });
      }
    }),
    libInjectCss({
      build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        // cssCodeSplit: true,
        outDir: "."
      },
      entry: entries,
      // fileName: (format, entryName) => {
      //   return entryName === 'index'
      //     ? `${format}/index.js`
      //     : `${format}/[name]/index.js`
      // },
      name: "react-evefyou-ui",
      formats: ["es", "cjs"],
      rollupOptions: {
        input: {
          "index": "ui/index.ts",
          "locale/en_US": "ui/locale/en_US.ts",
          "locale/zh_CN": "ui/locale/zh_CN.ts",
          "containers": "ui/containers.ts",
          "layouts": "./node_modules/react-evefyou-layouts/es/index.js",
          // "containers": "./node_modules/react-evefyou-containers/es/index.js",
          "components": "./node_modules/react-evefyou-components/es/index.js",
          "layouts/AdminLayout": "./node_modules/react-evefyou-layouts/es/AdminLayout/index.js",
          "layouts/CommonLayout": "./node_modules/react-evefyou-layouts/es/CommonLayout/index.js",
          "layouts/BasicFooter": "./node_modules/react-evefyou-layouts/es/BasicFooter/index.js",
          "layouts/BasicHeader": "./node_modules/react-evefyou-layouts/es/BasicHeader/index.js",
          "layouts/BasicSider": "./node_modules/react-evefyou-layouts/es/BasicSider/index.js",
          "containers/BasicContainer": "./node_modules/react-evefyou-containers/es/BasicContainer/index.js",
          "containers/TabContainer": "./node_modules/react-evefyou-containers/es/TabContainer/index.js",
          "containers/TableContainer": "./node_modules/react-evefyou-containers/es/TableContainer/index.js",
          "containers/KeepAliveContainer": "./node_modules/react-evefyou-containers/es/KeepAliveContainer/index.js",
          "components/BasicBreadcrumb": "./node_modules/react-evefyou-components/es/BasicBreadcrumb/index.js",
          "components/BasicButton": "./node_modules/react-evefyou-components/es/BasicButton/index.js",
          "components/BasicDropdown": "./node_modules/react-evefyou-components/es/BasicDropdown/index.js",
          "components/BasicForm": "./node_modules/react-evefyou-components/es/BasicForm/index.js",
          "components/BasicHelp": "./node_modules/react-evefyou-components/es/BasicHelp/index.js",
          "components/BasicIcon": "./node_modules/react-evefyou-components/es/BasicIcon/index.js",
          "components/BasicMenu": "./node_modules/react-evefyou-components/es/BasicMenu/index.js",
          "components/BasicModal": "./node_modules/react-evefyou-components/es/BasicModal/index.js",
          "components/BasicPopButton": "./node_modules/react-evefyou-components/es/BasicPopButton/index.js",
          "components/BasicScroll": "./node_modules/react-evefyou-components/es/BasicScroll/index.js",
          "components/BasicTable": "./node_modules/react-evefyou-components/es/BasicTable/index.js",
          "components/BasicTitle": "./node_modules/react-evefyou-components/es/BasicTitle/index.js",
          "components/BasicFallback": "./node_modules/react-evefyou-components/es/BasicFallback/index.js",
          "components/BasicNProgress": "./node_modules/react-evefyou-components/es/BasicNProgress/index.js",
          "components/BasicResult": "./node_modules/react-evefyou-components/es/BasicResult/index.js"
        },
        output: {
          minifyInternalExports: false,
          manualChunks: (id) => {
            var _a;
            if (id.includes("_common") && id.includes("hooks/use")) {
              console.log("hooks", id.split("/hooks/")[1].split("index.ts")[0]);
              return "_common/hooks/".concat(id.split("/hooks/")[1].split("index.ts")[0]);
            }
            if (id.includes("_common") && id.includes("utils/")) {
              console.log("utils", id.split("/utils/")[1].split("index.ts")[0]);
              return "_common/utils/".concat(id.split("/utils/")[1].split("index.ts")[0]);
            }
            let en = (_a = components.map((e) => e.split("/")).find((e) => id.includes(e[0]) && id.includes(e[1]))) == null ? void 0 : _a.join("/");
            en ??= level1s.find((e) => id.includes(e));
            en ??= locales.find((l) => id.includes(l.split("_")[0]));
            console.log("manualChunks", id);
            return en;
          },
          entryFileNames: (chunkInfo) => chunkInfo.name === "index" ? "[format]/index.js" : "[format]/[name]/index.js",
          chunkFileNames: "[format]/[name]/index.js",
          assetFileNames: "[ext]/[name].[ext]"
        },
        plugins: [
          nodeResolve(),
          commonjs()
        ],
        external: (source) => depPackages.find((p) => source.includes(p)) ? false : regexOfPackages.findIndex((p) => p.test(source)) !== -1 ? true : false
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
          hack: `true; @import (reference) "${path.resolve("ui/styles/variables/index.less")}";`,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcZnJvbnRlbmRcXFxcZXZlZnlvdVxcXFxyZWFjdC1ldmVmeW91LXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxmcm9udGVuZFxcXFxldmVmeW91XFxcXHJlYWN0LWV2ZWZ5b3UtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2Zyb250ZW5kL2V2ZWZ5b3UvcmVhY3QtZXZlZnlvdS11aS92aXRlLmNvbmZpZy50c1wiOy8qXG4gKiBAQXV0aG9yOiBFdmVmeW91RkUvZXZlZlxuICogQERhdGU6IDIwMjMtMDgtMjMgMTQ6NDg6MzFcbiAqIEBGaWxlUGF0aDogXFxyZWFjdC1ldmVmeW91LXVpXFx2aXRlLmNvbmZpZy50c1xuICogQERlc2NyaXB0aW9uOiBcbiAqIEV2ZXJ5b25lIGlzIGNvbWluZyB0byB0aGUgd29ybGQgaSBsaXZlIGluLCBhcyBpIGFtIGdvaW5nIHRvIHRoZSB3b3JsZCBsaXZlcyBmb3IgeW91LiBcdTRFQkFcdTRFQkFcdTc2ODZcdTVGODBcdTYyMTFcdTRFMTZcdTc1NENcdUZGMENcdTYyMTFcdTRFM0FcdTRFMTZcdTc1NENcdTRFMkRcdTRFQkFcdTRFQkFcdTMwMDJcbiAqIENvcHlyaWdodCAoYykgMjAyMyBieSBFdmVmeW91RkUvZXZlZiwgQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCBjc3NuYW5vUGx1Z2luIGZyb20gXCJjc3NuYW5vXCI7XG5pbXBvcnQgcG9zdGNzc1ByZXNldEVudiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnO1xuaW1wb3J0IFdpbmRpQ1NTIGZyb20gJ3ZpdGUtcGx1Z2luLXdpbmRpY3NzJztcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJztcbmltcG9ydCB7IGluY2x1ZGVzIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgbm9kZVJlc29sdmUgZnJvbSAnQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlJztcbmltcG9ydCBjb21tb25qcyBmcm9tICdAcm9sbHVwL3BsdWdpbi1jb21tb25qcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBwYXRoUmVzb2x2ZSA9ICh2OiBzdHJpbmcpID0+IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHYpXG5cbmNvbnN0IGRlcFBhY2thZ2VzID0gWy4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMpXVxuY29uc3QgZXh0ZXJuYWxQYWNrYWdlcyA9IFsuLi5PYmplY3Qua2V5cyhwa2cucGVlckRlcGVuZGVuY2llcyksIC4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMpXVxuY29uc3QgcmVnZXhPZlBhY2thZ2VzID0gZXh0ZXJuYWxQYWNrYWdlc1xuICAubWFwKHBhY2thZ2VOYW1lID0+IG5ldyBSZWdFeHAoYF4ke3BhY2thZ2VOYW1lfShcXFxcLy4qKT9gKSk7XG5cbmNvbnN0IGVudHJpZXMgPSB7XG4gICdpbmRleCc6IHBhdGhSZXNvbHZlKCd1aS9pbmRleC50cycpLFxuICAnbG9jYWxlL2VuX1VTJzogcGF0aFJlc29sdmUoJ3VpL2xvY2FsZS9lbl9VUy50cycpLFxuICAnbG9jYWxlL3poX0NOJzogcGF0aFJlc29sdmUoJ3VpL2xvY2FsZS96aF9DTi50cycpLFxufVxuY29uc3QgbGV2ZWwxcyA9IFsnY29tcG9uZW50cycsICdjb250YWluZXJzJywgJ2xheW91dHMnXVxuY29uc3QgbG9jYWxlcyA9IE9iamVjdC5rZXlzKHBrZy5leHBvcnRzKVxuICAuZmlsdGVyKGUgPT4gZS5pbmNsdWRlcygnbG9jYWxlJykpXG4gIC5tYXAoZSA9PiBlLnNwbGl0KCcuLycpWzFdKVxuY29uc3QgY29tcG9uZW50cyA9IE9iamVjdC5rZXlzKHBrZy5leHBvcnRzKVxuICAuZmlsdGVyKGUgPT4gZSAhPT0gJy4nICYmICFlLmluY2x1ZGVzKCdsb2NhbGUnKSlcbiAgLm1hcChlID0+IGUuc3BsaXQoJy4vJylbMV0pXG4gIC5maWx0ZXIoZSA9PiAhaW5jbHVkZXMoZSwgbGV2ZWwxcykpXG5cblxuY29uc29sZS5sb2coJ2xldmVsMXMnLCBsZXZlbDFzKVxuY29uc29sZS5sb2coJ2NvbXBvbmVudHMnLCBjb21wb25lbnRzKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBXaW5kaUNTUyh7XG4gICAgICBzY2FuOiB7XG4gICAgICAgIGRpcnM6IFsnLi91aSddLFxuICAgICAgICBmaWxlRXh0ZW5zaW9uczogWyd0c3gnLCAndHMnXVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBkdHMoe1xuICAgICAgLy8gaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxuICAgICAgYWZ0ZXJCdWlsZDogKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gJy4nO1xuICAgICAgICBjb25zdCByZWdleFRvRGVsZXRlID0gL19cXHcrXFwuZFxcLnRzJC87XG4gICAgICAgIGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeVBhdGgpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXJlY3RvcnlQYXRoLCBmaWxlKTtcbiAgICAgICAgICBpZiAocmVnZXhUb0RlbGV0ZS50ZXN0KGZpbGUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmcy51bmxpbmtTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYERlbGV0ZWQgZmlsZTogJHtmaWxlUGF0aH1gKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBkZWxldGluZyBmaWxlOiAke2Vycn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIGxpYkluamVjdENzcyh7XG4gICAgICBidWlsZDoge1xuICAgICAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICAgICAgLy8gY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgICAgICBvdXREaXI6ICcuJyxcbiAgICAgIH0sXG4gICAgICBlbnRyeTogZW50cmllcyxcbiAgICAgIC8vIGZpbGVOYW1lOiAoZm9ybWF0LCBlbnRyeU5hbWUpID0+IHtcbiAgICAgIC8vICAgcmV0dXJuIGVudHJ5TmFtZSA9PT0gJ2luZGV4J1xuICAgICAgLy8gICAgID8gYCR7Zm9ybWF0fS9pbmRleC5qc2BcbiAgICAgIC8vICAgICA6IGAke2Zvcm1hdH0vW25hbWVdL2luZGV4LmpzYFxuICAgICAgLy8gfSxcbiAgICAgIG5hbWU6ICdyZWFjdC1ldmVmeW91LXVpJyxcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCJdLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICdpbmRleCc6ICd1aS9pbmRleC50cycsXG4gICAgICAgICAgJ2xvY2FsZS9lbl9VUyc6ICd1aS9sb2NhbGUvZW5fVVMudHMnLFxuICAgICAgICAgICdsb2NhbGUvemhfQ04nOiAndWkvbG9jYWxlL3poX0NOLnRzJyxcbiAgICAgICAgICBcImNvbnRhaW5lcnNcIjogXCJ1aS9jb250YWluZXJzLnRzXCIsXG4gICAgICAgICAgXCJsYXlvdXRzXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1sYXlvdXRzL2VzL2luZGV4LmpzXCIsXG4gICAgICAgICAgLy8gXCJjb250YWluZXJzXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb250YWluZXJzL2VzL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb21wb25lbnRzXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb21wb25lbnRzL2VzL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJsYXlvdXRzL0FkbWluTGF5b3V0XCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1sYXlvdXRzL2VzL0FkbWluTGF5b3V0L2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJsYXlvdXRzL0NvbW1vbkxheW91dFwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtbGF5b3V0cy9lcy9Db21tb25MYXlvdXQvaW5kZXguanNcIixcbiAgICAgICAgICBcImxheW91dHMvQmFzaWNGb290ZXJcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWxheW91dHMvZXMvQmFzaWNGb290ZXIvaW5kZXguanNcIixcbiAgICAgICAgICBcImxheW91dHMvQmFzaWNIZWFkZXJcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWxheW91dHMvZXMvQmFzaWNIZWFkZXIvaW5kZXguanNcIixcbiAgICAgICAgICBcImxheW91dHMvQmFzaWNTaWRlclwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtbGF5b3V0cy9lcy9CYXNpY1NpZGVyL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb250YWluZXJzL0Jhc2ljQ29udGFpbmVyXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb250YWluZXJzL2VzL0Jhc2ljQ29udGFpbmVyL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb250YWluZXJzL1RhYkNvbnRhaW5lclwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29udGFpbmVycy9lcy9UYWJDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgICAgICBcImNvbnRhaW5lcnMvVGFibGVDb250YWluZXJcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbnRhaW5lcnMvZXMvVGFibGVDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgICAgICBcImNvbnRhaW5lcnMvS2VlcEFsaXZlQ29udGFpbmVyXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb250YWluZXJzL2VzL0tlZXBBbGl2ZUNvbnRhaW5lci9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY0JyZWFkY3J1bWJcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvZXMvQmFzaWNCcmVhZGNydW1iL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb21wb25lbnRzL0Jhc2ljQnV0dG9uXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb21wb25lbnRzL2VzL0Jhc2ljQnV0dG9uL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb21wb25lbnRzL0Jhc2ljRHJvcGRvd25cIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvZXMvQmFzaWNEcm9wZG93bi9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY0Zvcm1cIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvZXMvQmFzaWNGb3JtL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb21wb25lbnRzL0Jhc2ljSGVscFwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy9lcy9CYXNpY0hlbHAvaW5kZXguanNcIixcbiAgICAgICAgICBcImNvbXBvbmVudHMvQmFzaWNJY29uXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb21wb25lbnRzL2VzL0Jhc2ljSWNvbi9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY01lbnVcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvZXMvQmFzaWNNZW51L2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb21wb25lbnRzL0Jhc2ljTW9kYWxcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvZXMvQmFzaWNNb2RhbC9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY1BvcEJ1dHRvblwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy9lcy9CYXNpY1BvcEJ1dHRvbi9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY1Njcm9sbFwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy9lcy9CYXNpY1Njcm9sbC9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY1RhYmxlXCI6IFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlZnlvdS1jb21wb25lbnRzL2VzL0Jhc2ljVGFibGUvaW5kZXguanNcIixcbiAgICAgICAgICBcImNvbXBvbmVudHMvQmFzaWNUaXRsZVwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy9lcy9CYXNpY1RpdGxlL2luZGV4LmpzXCIsXG4gICAgICAgICAgXCJjb21wb25lbnRzL0Jhc2ljRmFsbGJhY2tcIjogXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVmeW91LWNvbXBvbmVudHMvZXMvQmFzaWNGYWxsYmFjay9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY05Qcm9ncmVzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy9lcy9CYXNpY05Qcm9ncmVzcy9pbmRleC5qc1wiLFxuICAgICAgICAgIFwiY29tcG9uZW50cy9CYXNpY1Jlc3VsdFwiOiBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZWZ5b3UtY29tcG9uZW50cy9lcy9CYXNpY1Jlc3VsdC9pbmRleC5qc1wiXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIG1pbmlmeUludGVybmFsRXhwb3J0czogZmFsc2UsXG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiAoaWQpID0+IHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnX2NvbW1vbicpICYmIGlkLmluY2x1ZGVzKCdob29rcy91c2UnKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaG9va3MnLCBpZC5zcGxpdCgnL2hvb2tzLycpWzFdLnNwbGl0KCdpbmRleC50cycpWzBdKVxuICAgICAgICAgICAgICByZXR1cm4gJ19jb21tb24vaG9va3MvJy5jb25jYXQoaWQuc3BsaXQoJy9ob29rcy8nKVsxXS5zcGxpdCgnaW5kZXgudHMnKVswXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnX2NvbW1vbicpICYmIGlkLmluY2x1ZGVzKCd1dGlscy8nKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXRpbHMnLCBpZC5zcGxpdCgnL3V0aWxzLycpWzFdLnNwbGl0KCdpbmRleC50cycpWzBdKVxuICAgICAgICAgICAgICByZXR1cm4gJ19jb21tb24vdXRpbHMvJy5jb25jYXQoaWQuc3BsaXQoJy91dGlscy8nKVsxXS5zcGxpdCgnaW5kZXgudHMnKVswXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbiA9IGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgLm1hcChlID0+IGUuc3BsaXQoJy8nKSlcbiAgICAgICAgICAgICAgLmZpbmQoZSA9PiBpZC5pbmNsdWRlcyhlWzBdKSAmJiBpZC5pbmNsdWRlcyhlWzFdKSk/LmpvaW4oJy8nKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbXBvbmVudHMgZW4nLCBlbiwgaWQpXG4gICAgICAgICAgICBlbiA/Pz0gbGV2ZWwxcy5maW5kKGUgPT4gaWQuaW5jbHVkZXMoZSkpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGV2ZWwxcyBlbicsIGVuKVxuICAgICAgICAgICAgZW4gPz89IGxvY2FsZXMuZmluZChsID0+IGlkLmluY2x1ZGVzKGwuc3BsaXQoJ18nKVswXSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFudWFsQ2h1bmtzJywgaWQpXG4gICAgICAgICAgICAvLyBpZiAoaWQuaW5jbHVkZXMoJ3dpbmRpLmNzcycpKVxuICAgICAgICAgICAgLy8gICBlbiA9IHBpcGUoXG4gICAgICAgICAgICAvLyAgICAgc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIC8vICAgICBsYXN0LFxuICAgICAgICAgICAgLy8gICAgIHNwbGl0KCcuY3NzJyksXG4gICAgICAgICAgICAvLyAgICAgaGVhZFxuICAgICAgICAgICAgLy8gICApKGlkKSBhcyBzdHJpbmdcbiAgICAgICAgICAgIC8vIGlkLmluY2x1ZGVzKCd3aW5kaS5jc3MnKSAmJiBjb25zb2xlLmxvZygnY3NzIG1hbnVhbENodW5rcycsIGVuLCBpZClcbiAgICAgICAgICAgIHJldHVybiBlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IChjaHVua0luZm8pID0+IGNodW5rSW5mby5uYW1lID09PSAnaW5kZXgnID8gJ1tmb3JtYXRdL2luZGV4LmpzJyA6ICdbZm9ybWF0XS9bbmFtZV0vaW5kZXguanMnLFxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW2Zvcm1hdF0vW25hbWVdL2luZGV4LmpzJyxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS5bZXh0XScsXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBub2RlUmVzb2x2ZSgpLFxuICAgICAgICAgIGNvbW1vbmpzKClcbiAgICAgICAgXSxcbiAgICAgICAgZXh0ZXJuYWw6IChzb3VyY2UpID0+IGRlcFBhY2thZ2VzLmZpbmQocCA9PiBzb3VyY2UuaW5jbHVkZXMocCkpXG4gICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgIDogcmVnZXhPZlBhY2thZ2VzLmZpbmRJbmRleChwID0+IHAudGVzdChzb3VyY2UpKSAhPT0gLTFcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGNzczoge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2UnXG4gICAgfSxcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1vZGlmeVZhcnM6IHtcbiAgICAgICAgICBoYWNrOiBgdHJ1ZTsgQGltcG9ydCAocmVmZXJlbmNlKSBcIiR7cGF0aC5yZXNvbHZlKCd1aS9zdHlsZXMvdmFyaWFibGVzL2luZGV4Lmxlc3MnKX1cIjtgLFxuICAgICAgICAgICdwcmltYXJ5LWNvbG9yJzogJyMwOTYwYmQnLFxuICAgICAgICAgICd0ZXh0LWNvbG9yJzogJyNjOWQxZDknLFxuICAgICAgICAgICd0ZXh0LWNvbG9yLWJhc2UnOiAnIzAwMDAwMGQ5JyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjc3NuYW5vUGx1Z2luKHtcbiAgICAgICAgICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgfSkgYXMgYW55LFxuICAgICAgICBwb3N0Y3NzUHJlc2V0RW52KHtcblxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cbiAgfSxcbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJyZWFjdC1ldmVmeW91LXVpXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4xN1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcIm1haW5cIjogXCIuL2Nqcy9pbmRleC5qc1wiLFxuICBcIm1vZHVsZVwiOiBcIi4vZXMvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9sb2NhbGUvemhfQ05cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2xvY2FsZS96aF9DTi9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvbG9jYWxlL3poX0NOL2luZGV4LmpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9sb2NhbGUvemhfQ04uZC50c1wiXG4gICAgfSxcbiAgICBcIi4vbG9jYWxlL2VuX1VTXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9sb2NhbGUvZW5fVVMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2xvY2FsZS9lbl9VUy9pbmRleC5qc1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vbG9jYWxlL2VuX1VTLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbXBvbmVudHMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbXBvbmVudHMvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xheW91dHNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2xheW91dHMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2xheW91dHMvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbnRhaW5lcnNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbnRhaW5lcnMvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbnRhaW5lcnMvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xheW91dHMvQWRtaW5MYXlvdXRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2xheW91dHMvQWRtaW5MYXlvdXQvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2xheW91dHMvQWRtaW5MYXlvdXQvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xheW91dHMvQ29tbW9uTGF5b3V0XCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9sYXlvdXRzL0NvbW1vbkxheW91dC9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvbGF5b3V0cy9Db21tb25MYXlvdXQvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xheW91dHMvQmFzaWNGb290ZXJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2xheW91dHMvQmFzaWNGb290ZXIvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2xheW91dHMvQmFzaWNGb290ZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xheW91dHMvQmFzaWNIZWFkZXJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2xheW91dHMvQmFzaWNIZWFkZXIvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2xheW91dHMvQmFzaWNIZWFkZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2xheW91dHMvQmFzaWNTaWRlclwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvbGF5b3V0cy9CYXNpY1NpZGVyL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9sYXlvdXRzL0Jhc2ljU2lkZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbnRhaW5lcnMvQmFzaWNDb250YWluZXJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbnRhaW5lcnMvQmFzaWNDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbnRhaW5lcnMvQmFzaWNDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbnRhaW5lcnMvVGFiQ29udGFpbmVyXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb250YWluZXJzL1RhYkNvbnRhaW5lci9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29udGFpbmVycy9UYWJDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbnRhaW5lcnMvVGFibGVDb250YWluZXJcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbnRhaW5lcnMvVGFibGVDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbnRhaW5lcnMvVGFibGVDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbnRhaW5lcnMvS2VlcEFsaXZlQ29udGFpbmVyXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb250YWluZXJzL0tlZXBBbGl2ZUNvbnRhaW5lci9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29udGFpbmVycy9LZWVwQWxpdmVDb250YWluZXIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNCcmVhZGNydW1iXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb21wb25lbnRzL0Jhc2ljQnJlYWRjcnVtYi9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29tcG9uZW50cy9CYXNpY0JyZWFkY3J1bWIvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNCdXR0b25cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbXBvbmVudHMvQmFzaWNCdXR0b24vaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbXBvbmVudHMvQmFzaWNCdXR0b24vaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNEcm9wZG93blwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvY29tcG9uZW50cy9CYXNpY0Ryb3Bkb3duL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9jb21wb25lbnRzL0Jhc2ljRHJvcGRvd24vaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNGb3JtXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb21wb25lbnRzL0Jhc2ljRm9ybS9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29tcG9uZW50cy9CYXNpY0Zvcm0vaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNIZWxwXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb21wb25lbnRzL0Jhc2ljSGVscC9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29tcG9uZW50cy9CYXNpY0hlbHAvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNJY29uXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb21wb25lbnRzL0Jhc2ljSWNvbi9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29tcG9uZW50cy9CYXNpY0ljb24vaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNNZW51XCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy9jb21wb25lbnRzL0Jhc2ljTWVudS9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvY29tcG9uZW50cy9CYXNpY01lbnUvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNNb2RhbFwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvY29tcG9uZW50cy9CYXNpY01vZGFsL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9jb21wb25lbnRzL0Jhc2ljTW9kYWwvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNQb3BCdXR0b25cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbXBvbmVudHMvQmFzaWNQb3BCdXR0b24vaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbXBvbmVudHMvQmFzaWNQb3BCdXR0b24vaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNTY3JvbGxcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbXBvbmVudHMvQmFzaWNTY3JvbGwvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbXBvbmVudHMvQmFzaWNTY3JvbGwvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNUYWJsZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvY29tcG9uZW50cy9CYXNpY1RhYmxlL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9jb21wb25lbnRzL0Jhc2ljVGFibGUvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNUaXRsZVwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvY29tcG9uZW50cy9CYXNpY1RpdGxlL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9jb21wb25lbnRzL0Jhc2ljVGl0bGUvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNGYWxsYmFja1wiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvY29tcG9uZW50cy9CYXNpY0ZhbGxiYWNrL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy9jb21wb25lbnRzL0Jhc2ljRmFsbGJhY2svaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNOUHJvZ3Jlc3NcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbXBvbmVudHMvQmFzaWNOUHJvZ3Jlc3MvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbXBvbmVudHMvQmFzaWNOUHJvZ3Jlc3MvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2NvbXBvbmVudHMvQmFzaWNSZXN1bHRcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL2NvbXBvbmVudHMvQmFzaWNSZXN1bHQvaW5kZXguanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2NvbXBvbmVudHMvQmFzaWNSZXN1bHQvaW5kZXguanNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2luZGV4LmQudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJjanNcIixcbiAgICBcImVzXCIsXG4gICAgXCJjc3NcIixcbiAgICBcImluZGV4LmQudHNcIixcbiAgICBcImxvY2FsZVwiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJidWlsZDp0c2NcIjogXCJ0c2NcIixcbiAgICBcImNsZWFuXCI6IFwicmltcmFmIG5vZGVfbW9kdWxlc1wiLFxuICAgIFwiY2xlYW46Y2FjaGVcIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzLy5jYWNoZS8gJiYgcmltcmFmIG5vZGVfbW9kdWxlcy8udml0ZVwiLFxuICAgIFwiY2xlYW46YnVpbGRcIjogXCJyaW1yYWYgZXMgJiYgcmltcmFmIGNqcyAmJiByaW1yYWYgY3NzICYmIHJpbXJhZiBkaXN0ICYmIHJpbXJhZiBsb2NhbGVcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLiAtLWV4dCB0cyx0c3ggLS1yZXBvcnQtdW51c2VkLWRpc2FibGUtZGlyZWN0aXZlcyAtLW1heC13YXJuaW5ncyAwXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vRXZlZnlvdUZFL3JlYWN0LWV2ZWZ5b3UtdWkuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJyZWFjdFwiLFxuICAgIFwiY29tcG9uZW50c1wiLFxuICAgIFwidWlcIixcbiAgICBcImV2ZWZ5b3VcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkV2ZWZ5b3VGRVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9FdmVmeW91RkUvcmVhY3QtZXZlZnlvdS11aS9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0V2ZWZ5b3VGRS9yZWFjdC1ldmVmeW91LXVpI3JlYWRtZVwiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdC1ldmVmeW91LWNvbXBvbmVudHNcIjogXCJeMS4wLjM1XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWNvbnRhaW5lcnNcIjogXCJeMS4wLjI1XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWxheW91dHNcIjogXCJeMS4wLjExXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhbnQtZGVzaWduL2ljb25zXCI6IFwiPj01LjAuMVwiLFxuICAgIFwiQGRuZC1raXQvY29yZVwiOiBcIj49Ni4wLjhcIixcbiAgICBcIkBkbmQta2l0L21vZGlmaWVyc1wiOiBcIj49Ni4wLjFcIixcbiAgICBcIkBkbmQta2l0L3NvcnRhYmxlXCI6IFwiPj03LjAuMlwiLFxuICAgIFwiQGRuZC1raXQvdXRpbGl0aWVzXCI6IFwiPj0zLjIuMVwiLFxuICAgIFwiQGVtb3Rpb24vY3NzXCI6IFwiPj0xMS4xMS4wXCIsXG4gICAgXCJAaWNvbmlmeS9yZWFjdFwiOiBcIj49NC4xLjFcIixcbiAgICBcImFob29rc1wiOiBcIj49My43LjZcIixcbiAgICBcImFudGRcIjogXCI+PTUuNi4zXCIsXG4gICAgXCJjbGFzc25hbWVzXCI6IFwiPj0yLjMuMlwiLFxuICAgIFwibW9tZW50XCI6IFwiPj0yLjI5LjRcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIj49MC4yLjBcIixcbiAgICBcInJhbWRhXCI6IFwiPj0wLjI5LjBcIixcbiAgICBcInJlYWN0XCI6IFwiPj0xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIj49MTguMi4wXCIsXG4gICAgXCJyZWFjdC1kcmFnZ2FibGVcIjogXCI+PTQuNC41XCIsXG4gICAgXCJyZWFjdC1ldmVmeW91LWNvbW1vblwiOiBcIj49MS4wLjhcIixcbiAgICBcInJlYWN0LWV2ZWZ5b3UtaG9va3NcIjogXCI+PTEuMC4xN1wiLFxuICAgIFwicmVhY3QtZXZlZnlvdS1yb3V0ZXJcIjogXCI+PTEuMC4xMlwiLFxuICAgIFwicmVhY3QtaW50bFwiOiBcIj49Ni40LjRcIixcbiAgICBcInJlYWN0LXJvdXRlclwiOiBcIj49Ni4xMC4wXCIsXG4gICAgXCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiPj02LjEwLjBcIixcbiAgICBcInV1aWRcIjogXCI+PTkuMC4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudC1kZXNpZ24vY29sb3JzXCI6IFwiXjcuMC4wXCIsXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1jb21tb25qc1wiOiBcIl4yNS4wLjRcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLW5vZGUtcmVzb2x2ZVwiOiBcIl4xNS4yLjFcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjUuMVwiLFxuICAgIFwiQHR5cGVzL3JhbWRhXCI6IFwiXjAuMjkuMFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuMTVcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMi43XCIsXG4gICAgXCJAdHlwZXMvdXVpZFwiOiBcIl45LjAuMVwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNi4wLjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNi4wLjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMC4zXCIsXG4gICAgXCJjb25zb2xhXCI6IFwiXjMuMi4zXCIsXG4gICAgXCJjc3NuYW5vXCI6IFwiXjYuMC4xXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC40NS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuNi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2hcIjogXCJeMC40LjNcIixcbiAgICBcImxlc3NcIjogXCJeNC4xLjNcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjIzXCIsXG4gICAgXCJwb3N0Y3NzLWNsaVwiOiBcIl4xMC4xLjBcIixcbiAgICBcInBvc3Rjc3MtaHRtbFwiOiBcIl4xLjUuMFwiLFxuICAgIFwicG9zdGNzcy1sZXNzXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJwb3N0Y3NzLXByZXNldC1lbnZcIjogXCJeOC4zLjJcIixcbiAgICBcInJpbXJhZlwiOiBcIl41LjAuMVwiLFxuICAgIFwidHNsaWJcIjogXCJeMi42LjFcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4xLjZcIixcbiAgICBcInZpdGVcIjogXCJeNC40LjVcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjUuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjogXCJeMS4yLjFcIixcbiAgICBcInZpdGUtcGx1Z2luLXdpbmRpY3NzXCI6IFwiXjEuOS4wXCIsXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMi4wXCIsXG4gICAgXCJ3aW5kaWNzc1wiOiBcIl4zLjUuNlwiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFRQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjs7O0FDWjFCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixNQUFRO0FBQUEsRUFDUixRQUFVO0FBQUEsRUFDVixPQUFTO0FBQUEsRUFDVCxTQUFXO0FBQUEsSUFDVCxLQUFLO0FBQUEsTUFDSCxRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsTUFDWCxPQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsTUFDaEIsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLE1BQ1gsT0FBUztB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
