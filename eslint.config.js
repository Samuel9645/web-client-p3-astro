import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,astro}'],
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs['jsx-a11y-recommended'],
    {
        files: ['**/*.astro'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.astro'],
            },
        },
    },
];