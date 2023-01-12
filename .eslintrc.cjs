module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint', '@html-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [
        { files: ['*.svelte'], processor: 'svelte3/svelte3' },
        {
            files: ['*.html'],
            parser: '@html-eslint/parser'
        }
    ],
    settings: {
        'svelte3/typescript': () => require('typescript')
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    }
};
