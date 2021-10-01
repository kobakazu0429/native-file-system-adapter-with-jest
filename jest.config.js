module.exports = /** @type {import("@jest/types").Config} */({
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testMatch: ["/**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
})
