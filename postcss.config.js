const path = require('path')
const webpack = require('webpack')
const config = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve (id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      }
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5'
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
    require('tailwindcss')({}),
    require('postcss-class-rename')({
      "\\\\:": "--",
      "\\\\/": "--",
      "\\\\.": "--",
      ".:": "--",
      "\\\*": "--",
    })
    // ...(process.env.UNI_PLATFORM !== 'h5' ? [require('postcss-class-rename')({
    //   "\\\\:": "--",
    //   "\\\\/": "--",
    //   "\\\\.": "--",
    //   ".:": "--",
    //   "\\\*": "--",
    // })] : [require('autoprefixer')({
    //   remove: true
    // }),])
  ]
}
if (webpack.version[0] > 4) {
  delete config.parser
}
module.exports = config
