export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      {
        configFile: './babel.config.js',
      },
    ],
  },
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: ['/server/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.js',
    '!src/main.jsx',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(framer-motion|react-slick|slick-carousel)/)',
  ],
};
