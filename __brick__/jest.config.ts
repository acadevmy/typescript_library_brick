export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^lib/(.*)$": "<rootDir>/lib/$1",
  },
  modulePathIgnorePatterns: ["./dist/"],
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ["./lib/**/*.ts", "!./lib/**/*.test.ts"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
