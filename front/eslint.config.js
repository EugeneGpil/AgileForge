import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    files: [
      '**/*.{cjs,js,mjs,vue}',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'array-bracket-newline': [
        'error',
        'always',
      ],
      'array-element-newline': [
        'error',
        'always',
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'eol-last': [
        'error',
        'always',
      ],
      'object-curly-newline': [
        'error',
        'always',
      ],
      'object-property-newline': [
        'error',
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          'registeredComponentsOnly': false,
        },
      ],
      'vue/html-quotes': [
        'error',
        'single',
      ],
      indent: [
        'error',
        2,
      ],
      quotes: [
        'error',
        'single',
      ],
      semi: [
        'error',
        'never',
      ],
    },
  },
  {
    files: [
      'pages/*.vue',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
