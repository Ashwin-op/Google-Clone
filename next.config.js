const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  future: {
    webpack5: true
  }
};
