/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/api/**/*',
    'src/components/**/*',
    'src/hooks/**/*',
    'src/pages/**/*',
    'src/store/**/*',
    'src/utils/**/*',
    '!src/**/*.(d|type).ts',
    '!src/**/index.ts',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};

export default config;
