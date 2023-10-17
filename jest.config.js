const config = {
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "packages/**/*.tsx",
    "!packages/**/icons/**/*", // Exclude files in the 'icons' folder
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  preset: "ts-jest",
  testMatch: ["**/?(*.)+(test).+(ts|tsx|js)"],
  verbose: true,
};

export default config;
