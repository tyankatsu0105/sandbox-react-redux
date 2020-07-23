/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const config = require("./webpack.config.base");

/* eslint-enable @typescript-eslint/no-var-requires */

/** @type import('webpack').Configuration */
module.exports = {
  ...merge(config, {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            configFile: "tsconfig.production.json",
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  }),
};
