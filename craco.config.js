const eslintConfig = require('./.eslintrc');
const webpackConfig = require('./webpack.config');
const jestConfig = require('./jest.config');

module.exports = {
  babel: {
    loaderOptions: {
      babelrc: true,
    },
  },
  eslint: {
    configure: eslintConfig,
  },
  webpack: {
    configure: webpackConfig,
  },
  jest: {
    configure: jestConfig,
  },
};
