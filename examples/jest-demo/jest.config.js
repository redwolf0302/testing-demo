module.exports = {
    "verbose": true,
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "setupFiles": [
        "<rootDir>/jest.setup.js"
    ],
    "testEnvironment": "node",
    "moduleDirectories": [
        "<rootDir>/dist/src/",
        "<rootDir>/dist/server/",
        "<rootDir>/../project-demo/node_modules",
        "<rootDir>/node_modules"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "modulePathIgnorePatterns": [
        "<rootDir>/dist/src/images/",
        "<rootDir>/dist/src/styles/"
    ],
    "collectCoverageFrom":[
        "dist/**/*.{js,jsx}",
        "src/**/*.{js,jsx}"
    ]
};