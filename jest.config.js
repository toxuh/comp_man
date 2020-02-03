module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.env.{js,jsx}',
    '!src/**/constants.js',
    '!src/**/types.js',
    '!src/**/@typedefs.js',
    '!src/**/messages.js',
    '!src/**/index.{js,jsx}',
    '!src/polyfills/*',
    '!src/serviceWorker.js',
    '!src/setupTests.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
    '~/(.*)$': '<rootDir>/src/$1',
  },
};
