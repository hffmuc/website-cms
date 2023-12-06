module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ["http://localhost:1337", "http://localhost:1337/", "http://localhost:1338", "http://localhost:1338/", "http://localhost:3000", "http://kilab.hff-muc.de", "https://kilab.hff-muc.de", "http://128.140.103.202", "https://128.140.103.202", "http://127.0.0.1:1337", "http://128.140.103.202:1337"]
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
