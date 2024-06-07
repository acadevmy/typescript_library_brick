export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  modulePathIgnorePatterns: ["./dist/"],
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ["./src/**/*.ts", "!./src/**/*.test.ts"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
