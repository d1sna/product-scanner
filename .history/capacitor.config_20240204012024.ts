import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "product.scanner",
  appName: "Product Scanner",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    hostname: "http://192.168.100.106:3000",
    cleartext: true,
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId:
        "609052745817-nf0g3195cvdgrpahvfa9s119r1hkopbj.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
