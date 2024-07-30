module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },

    // Other Jest configurations (if needed)
  };
  