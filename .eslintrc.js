const errorOnProduction =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  extends: [
    // https://git.io/vy8hw
    'airbnb',
    'airbnb/hooks',
    // https://git.io/JemQ8
    'plugin:jsx-a11y/recommended',
    // https://git.io/Je0xr
    'plugin:jest/all',
    // https://git.io/vpeUT
    'prettier',
    'prettier/react',
  ],

  plugins: ['jsx-a11y', 'jest', 'prettier'],

  rules: {
    'prettier/prettier': 'error',

    'import/namespace': 'error',
    'import/default': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'index',
          'external',
          'internal',
          'sibling',
          'parent',
          'builtin',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    'react/boolean-prop-naming': 'error',
    'react/sort-prop-types': [
      'error',
      {
        requiredFirst: true,
        callbacksLast: true,
        sortShapeProp: true,
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: true,
        shorthandLast: true,
        callbacksLast: true,
        noSortAlphabetically: true,
      },
    ],

    'jest/no-hooks': 'off',

    'no-console': errorOnProduction,
    'no-alert': errorOnProduction,
    'no-debugger': errorOnProduction,
  },

  overrides: [
    {
      // it is ok to import dev dependencies in `*.dev.js` files
      files: ['**/*.dev.js?(x)'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      // it is ok to `require` modules in `*.env.js` files
      // common use case:
      //
      // if (process.env.NODE_ENV === 'production') {
      //   module.exports = require('./someModule.prod');
      // } else {
      //   module.exports = require('./someModule.dev');
      // }
      //
      files: ['**/*.env.js?(x)'],
      rules: {
        'global-require': 'off',
      },
    },
    {
      // it is ok to `require` modules in polyfills
      files: ['**/polyfills/*.js?(x)'],
      rules: {
        'global-require': 'off',
      },
    },
    {
      // we use `immer` in our reducers
      // so it is ok to ignore `default` case in `switch` statements
      // and it is ok to write to `draft` param
      files: ['**/reducer.js'],
      rules: {
        'default-case': 'off',
        'no-param-reassign': [
          'error',
          {
            ignorePropertyModificationsFor: ['draft'],
          },
        ],
      },
    },
    {
      // conceptually constants, action types, actions,
      // selectors, typedefs, utils and components
      // are collections of exports
      // so it is ok to don't prefer default export here
      files: [
        '**/constants.js',
        '**/types.js',
        '**/actions.js',
        '**/selectors.js',
        '**/@typedefs.js',
        '**/utils/index.js',
        '**/components/index.js',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      // we don't use our tests in the app source
      // so it is ok to import dev dependencies in `*.test.js?(x)` files
      // and props spreading is sometimes a handy feature in tests
      files: ['**/*.test.js?(x)', '**/testReducer.js', '**/utils/tests/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      // these are service files that are not included in the app source
      // so we can adjust some linter rules
      files: [
        'setupTests.js',
        'craco.config.js',
        'jest.config.js',
        'webpack.config.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],

  env: {
    browser: true,
    'jest/globals': true,
  },

  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': '.',
          '~': './src',
        },
      },
    },
  },
};
