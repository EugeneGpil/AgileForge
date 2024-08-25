import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import enforce from 'eslint-plugin-import-newlines'

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
    plugins: {
      enforce,
    },
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
      'enforce/enforce': [
        'error',
        {
          items: 40,
          'max-len': 120, 
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: 'always',
          ImportDeclaration: 'never',
        },
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
