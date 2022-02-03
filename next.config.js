const { createSecureHeaders } = require("next-secure-headers");
const withImages = require('next-images');
const optimizedImages = require('next-optimized-images');
/** @type {import('next').NextConfig} */
module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          target: 'serverless'
        }
      }
    });

    return config;
  },
  assetPrefix: noPrefix ? '' : '/Portfolio/',
}
), {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 425, 640, 768, 1024, 1280, 1440, 2560],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
           contentSecurityPolicy: {
            directives: {
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'"],
              baseUri: "self",
              formAction: "self",
              frameAncestors: true,
            },
          },
          frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
        }),
      }
    ];
  },
};
