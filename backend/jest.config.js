module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest', // Tells Jest to use ts-jest for TypeScript files
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
