import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "product.scanner",
  appName: "Product Scanner",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://172.20.10.2:3000",
    cleartext: true,
  },
};

export default config;
