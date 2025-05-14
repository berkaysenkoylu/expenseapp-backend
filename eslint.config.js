import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['dist', 'node_modules'],
    },
    // TypeScript support
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...tseslint.configs.recommended.rules, // enable recommended TS rules
            ...eslintConfigPrettier.rules,         // turn off conflicting Prettier rules
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'all',
                },
            ],
        },
    },
    // Optional: JS fallback config (non-TS)
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'all',
                },
            ],
        },
    },
];