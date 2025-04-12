import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "variables.scss";`,
  },
};

export default nextConfig;
