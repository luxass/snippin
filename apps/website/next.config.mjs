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
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "snippin.luxass.dev",
            },
            {
              type: "header",
              key: "Snippin-Registry",
              value: "snippin-explorer"
            }
          ],
          destination: "/api/snippin/:path*",
        }
      ]
    }
  }
})