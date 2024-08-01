module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp|svg|png)$':'<rootDir>/fileMock.js'

  
    },

    transformIgnorePatterns: [
      '/node_modules/', 
    ],

    
  };
  