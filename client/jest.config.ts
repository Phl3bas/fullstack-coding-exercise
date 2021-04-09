import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    coverageDirectory: "./coverage",
    testMatch: ["**/?(*.)+(test|spec).tsx"],
    resetMocks: true,
    clearMocks: true,
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.test.json",
      },
    },
  };
};
