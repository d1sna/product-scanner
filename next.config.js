require("dotenv").config();

module.exports = {
  basePath: "",
  swcMinify: true,
  images: {
    domains: ["http://127.0.0.1"],
  },
  transpilePackages: [
    "@ionic/react",
    "@ionic/core",
    "@stencil/core",
    "ionicons",
  ],
};
