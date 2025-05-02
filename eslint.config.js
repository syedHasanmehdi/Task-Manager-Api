import googleConfig from 'eslint-config-google';
import importPlugin from 'eslint-plugin-import';

const filteredRules = {...googleConfig.rules};

// Remove deprecated rules incompatible with ESLint v9
delete filteredRules['require-jsdoc'];
delete filteredRules['valid-jsdoc'];

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
    },
    rules: filteredRules,
  },
];
