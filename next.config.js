const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/thomps9012/thomps9012.github.io/gh-pages/' : '',
}