const path = require("path")

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest-configs/setup-test-env.js"),
  ],
  transform: {
    "\\.svg": "<rootDir>/jest-configs/__mocks__/svgTransform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  moduleNameMapper: {
    "\\.svg": `<rootDir>/jest-configs/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/jest-configs/loadershim.js`],
}
