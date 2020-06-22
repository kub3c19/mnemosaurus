module.exports = {
    root: true,

    env: {
        node: true
    },

    rules: {
        'arrow-body-style': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            'allman'
        ],
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': 'off',
        'consistent-return': 'off',
        'default-case': 'off',
        indent: 'off',
        'indent-legacy': 'off',
        'import/extensions': ['error', 'always',
            {
                'js': 'never',
                'mjs': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
            }
        ],
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': true,
            'optionalDependencies': false,
            'peerDependencies': false
        }],
        'import/prefer-default-export': 'off',
        'newline-per-chained-call': 'off',
        'import/no-cycle': 'off',
        'lines-between-class-members': 'off',
        'max-len': 'off',
        'new-cap': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-floating-decimal': 'off',
        'no-multi-spaces': 'off',
        'no-new': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false
            }
        ],
        'no-use-before-define': 'off',
        'no-restricted-globals': 'off',
        'no-template-curly-in-string': 'off',
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'object-shorthand': [
            'error',
            'always'
        ],
        'prefer-promise-reject-errors': 'off',
        'quote-props': 'off',
        quotes: 'off',
        radix: 'off',
        'vue/script-indent': [
            'off',
            4,
            {
                baseIndent: 1
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020
    },

    'extends': [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript',
        'eslint:recommended'
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        }
    }
};
