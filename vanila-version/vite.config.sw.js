import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // console.log("env", env);
  return {
    root: "src",
    base: "./",
    publicDir: false,
    build: {
      outDir: "../dist",
      emptyOutDir: false,
      rollupOptions: {
        external: (id) => id.startsWith("src/"),
        input: {
          "firebase-messaging-sw": "./src/firebase-messaging-sw.js"
        },
        output: {
          entryFileNames: (assetInfo) =>
            assetInfo.name === "service-worker" ? "firebase-messaging-sw.js" : "firebase-messaging-sw.js",
        },
      },
    }
  }
});
