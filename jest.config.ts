import { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  rootDir: './',
  preset: 'ts-jest/presets/js-with-ts-esm',
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests',
  ],
  coveragePathIgnorePatterns: [
    '.spec.util.ts',
    '.test.util.ts',
    '.setup.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      useESM: true,
      extensionsToTreatAsESM: ['.js', '.ts', '.tsx', '.jsx',],
    },
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/jest.setup.ts',
  ],
  modulePathIgnorePatterns: [
    '/node_modules/',
  ],
});
