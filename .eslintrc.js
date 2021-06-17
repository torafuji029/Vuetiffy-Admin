module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'prettier/vue',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error'],
    'space-before-function-paren': 0,
    'no-irregular-whitespace': 0,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'layout',
          'components',
          'mixins',
          'middleware',
          'asyncData',
          'fetch',
          'serverPrefetch',
          'data',
          'computed',
          'watch',
          'created',
          'mounted',
          'updated',
          'destroyed',
          'methods',
        ],
      },
    ],
  },
}
