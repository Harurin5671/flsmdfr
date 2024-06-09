module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            components: './src/components',
            screens: './src/screens',
            assets: './assets',
            constants: './src/constants',
            routes: './src/routes',
            redux: './src/redux',
            hooks: './src/hooks'
          }
        }
      ]
    ]
  }
}
