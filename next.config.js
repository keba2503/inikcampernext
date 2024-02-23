const withImages = require('next-images');
module.exports = withImages({
    webpack(config, options) {
        return config
    }
});

module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}

