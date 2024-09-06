import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import enforce from 'eslint-plugin-import-newlines'
import pluginImport from 'eslint-plugin-import'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    files: [
      '**/*.{cjs,js,mjs,vue,ts}',
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
      import: pluginImport,
      '@stylistic/js': stylisticJs,
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
      'import/extensions': [
        'error',
        'always',
      ],
      'no-undef': 'off',
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
      '@stylistic/js/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          'registeredComponentsOnly': false,
        },
      ],
      'vue/html-closing-bracket-spacing': [
        'error',
        {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always',
        },
      ],
      'vue/html-quotes': [
        'error',
        'single',
      ],
      'vue/mustache-interpolation-spacing': [
        'error',
        'always',
      ],
      'vue/padding-line-between-blocks': [
        'error',
        'always',
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
