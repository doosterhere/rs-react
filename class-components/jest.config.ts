import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*',
    'src/hooks/**/*',
    'src/pages/**/*',
    'src/store/**/*',
    'src/utils/**/*',
    'src/app/**',
    '!src/**/*.(d|type).ts',
    '!src/**/index.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
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
};

export default createJestConfig(config);
