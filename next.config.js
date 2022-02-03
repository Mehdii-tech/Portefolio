const { createSecureHeaders } = require("next-secure-headers");
/** @type {import('next').NextConfig} */
module.exports = {
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
