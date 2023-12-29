const withImages = require('next-images');
module.exports = withImages({
    webpack(config, options) {
        return config
    }
});

module.exports = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}

