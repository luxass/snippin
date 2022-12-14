import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

import { env } from './src/env/server.mjs';

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 */
function defineConfig(config) {
  return config;
}

export default defineConfig(
  withPlugins([withTM(['ui'])], {
    swcMinify: true,
    reactStrictMode: true,
    images: {
      domains: ['avatars.githubusercontent.com']
    },
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/:path*',
            has: [
              {
                type: 'header',
                key: 'Snippin-Registry',
                value: 'snippin-explorer'
              }
            ],
            destination: '/snippets/:path*'
          }
        ]
      };
    }
  })
);
