import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    coverageDirectory: "./coverage",
    testMatch: ["**/?(*.)+(test|spec).(ts|tsx)"],
    resetMocks: true,
    clearMocks: true,
  };
};
