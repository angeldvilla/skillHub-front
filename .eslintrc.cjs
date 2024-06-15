const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true,
  plugins: ['prettier', 'import'],
  extends: [
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project
  },
  settings: {
    'import/resolver': { typescript: { project } }
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        plugins: ['prettier-plugin-tailwindcss']
      }
    ],
    'import/no-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'object',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$'
      }
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@next/next/no-img-element': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off'
  }
}
