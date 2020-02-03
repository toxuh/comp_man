if (process.env.NODE_ENV === 'production') {
  require('./polyfills.prod');
} else {
  require('./polyfills.dev');
}
