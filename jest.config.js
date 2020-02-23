module.exports = {
  displayName: 'local/umi-dva',
  modulePaths: ['<rootDir>/src/'], // node module search path, like 'models/*'
  testURL: 'http://localhost:8000', // reflected in properties such as location.href
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js']
}
