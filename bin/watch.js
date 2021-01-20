const chokidar = require('chokidar');
const buildTypeScript = require('./buildTypeScript');

// One-liner for current directory
chokidar.watch('./src').on('all', buildTypeScript);
