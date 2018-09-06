module.exports = {
    globals: [
         __baseUrl__ = "C:\\dev\\projects\\triangle-test\\TriangeTest.html"
        ],
    testMatch: "../specs/**/*.js",
    setupTestFrameworkScriptFile: "./setupTests.js",
    setupFiles: [
          "<rootDir>/config/polyfills.js"
        ],
    testEnvironment: "node",
    transform: {
          "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
        },
    transformIgnorePatterns: [
          "[/\\\\]node_modules[/\\\\].+\\.js$"
        ],
    moduleNameMapper: {
          "^react-native$": "react-native-web"
        }
};
