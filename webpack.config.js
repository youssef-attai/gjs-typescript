module.exports = {
  mode: "development",
  entry: ["./main.ts"],
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  experiments: {
    outputModule: true,
  },
  externalsType: "module",
  // Ignore GJS imports
  externals: ({ context, request }, callback) => {
    if (/^gi:/.test(request)) {
      // Externalize to a commonjs module using the request path
      console.debug("externals", request);
      return callback(null, "module " + request);
    }
    callback();
  },
};
