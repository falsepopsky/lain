module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'turbo',
    'prettier',
  ],
  overrides: [
    {
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['**/*.test.ts', '**/*.spec.ts'],
    },
  ],
  reportUnusedDisableDirectives: true,
};
