module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test'],
    ],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
  },
}
