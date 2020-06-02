module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text", "lcov"],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  preset: 'ts-jest',
  reporters: ['default', [
    'jest-junit',
    {
      'outputDirectory': 'reports',
      'outputName': 'jest-junit.xml',
    }
  ]],
  roots: [
    "<rootDir>/src",
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
  ],
  testRegex: [
    "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  ],
  verbose: true,
};
