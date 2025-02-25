module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // other configurations..
};
