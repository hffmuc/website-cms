module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ["http://localhost:1337", "http://localhost:3000", "http://127.0.0.1:1337", "http://10.10.0.215:1337"]
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
