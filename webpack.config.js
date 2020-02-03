const pt = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': pt.resolve(__dirname),
      '~': pt.resolve(__dirname, 'src'),
    },
  },
};
