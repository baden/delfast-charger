import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // console.log("env", env);
  return {
    root: "src",
    base: "./",
    server: {
      watch: {
        exclude: ["firebase-messaging-sw.js"],
      },
      // middlewareMode: true,
    },
    build: {
      outDir: "../dist",
    }
  }
});
