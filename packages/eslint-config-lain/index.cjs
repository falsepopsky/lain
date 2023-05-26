module.exports = {
  extends: ['turbo'],
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'standard-with-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:n/recommended',
        'plugin:promise/recommended',
        'prettier',
      ],
      files: ['**/*.ts'],
    },
    {
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['**/*.test.ts', '**/*.spec.ts'],
    },
  ],
  reportUnusedDisableDirectives: true,
};
