module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ['/node_modules/', 'node', '/es/', '/lib/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};