const path = require('path');

module.exports = {
  entry: {
    main: './src/cozy-bs.js',
  },
  output: {
    filename: 'cozy-bs.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
