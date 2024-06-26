module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'assets': './assets',
            'components': './components',
            'constants': '.constants',
            'hooks': './hooks',
            'scripts': './scripts',
            'src': './src',
            'tests': './tests'
          }
        }
      ]
    ]
  };
};
