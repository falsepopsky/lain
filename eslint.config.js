import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
// @ts-expect-error: types doesn't exist
import pluginPromise from 'eslint-plugin-promise';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended-module'],
  pluginPromise.configs['flat/recommended'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['packages/*/tests/*.test.ts'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2023,
      },
    },
    rules: {
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          enums: false,
          variables: false,
          typedefs: false,
        },
      ],
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: false, ignoreVoidOperator: false },
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableBoolean: true }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
  { ignores: ['**/dist/**', '**/fixtures/**', '**/docs/**'] }
);