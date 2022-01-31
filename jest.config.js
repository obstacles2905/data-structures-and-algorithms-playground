module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['tests/*.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/*.test.ts'],
  testTimeout: 60000,
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};