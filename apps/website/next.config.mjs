import { env } from "./src/env/server.mjs";

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 */
 function defineConfig(config) {
  return config;
}

export default defineConfig({
  swcMinify: true,
  reactStrictMode: true
})