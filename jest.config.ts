import type { Config } from 'jest';

const config: Config = {
    transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
