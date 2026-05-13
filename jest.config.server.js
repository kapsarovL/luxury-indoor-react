export default {
  testEnvironment: 'node',
  rootDir: './',
  testMatch: ['<rootDir>/server/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      {
        configFile: './babel.config.js',
      },
    ],
  },
  collectCoverageFrom: ['server/**/*.js', '!server/**/*.test.js'],
};
