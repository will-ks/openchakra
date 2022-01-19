// NativeBase
const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')

const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'browser-nativefs',
  // NativeBase
  'react-native-web',
  'native-base',
])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_VISUALIZE == 1,
})

module.exports = withPlugins([
  [withBundleAnalyzer, {}],
  [withTM],
  // NativeBase
  [withFonts, { projectRoot: __dirname }],
  [withExpo, { projectRoot: __dirname }],
])
