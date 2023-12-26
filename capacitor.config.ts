import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "product.scanner",
  appName: "Product Scanner",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.31.101:3000",
    cleartext: true,
  },
};

export default config;
