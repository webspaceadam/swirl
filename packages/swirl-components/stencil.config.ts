import autoprefixer from "autoprefixer";
import postcssCustomMedia from "postcss-custom-media";
import postcssNested from "postcss-nested";

import { angularOutputTarget } from "@stencil/angular-output-target";
import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  globalStyle: "src/styles/global.css",
  namespace: "swirl-components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      file: "components.json",
      type: "docs-json",
    },
    reactOutputTarget({
      componentCorePackage: "@getflip/swirl-components",
      proxiesFile: "../swirl-components-react/lib/stencil-generated/index.ts",
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: "@getflip/swirl-components",
      directivesProxyFile:
        "../swirl-components-angular/projects/component-library/src/lib/stencil-generated/components.ts",
      directivesArrayFile:
        "../swirl-components-angular/projects/component-library/src/lib/stencil-generated/index.ts",
    }),
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer(), postcssNested(), postcssCustomMedia()],
    }),
  ],
};