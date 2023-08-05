const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
