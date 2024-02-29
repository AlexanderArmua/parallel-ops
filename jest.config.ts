import type {Config} from 'jest';

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        '@modules(.*)': '<rootDir>/src/modules/$1',
    },
};

export default config;