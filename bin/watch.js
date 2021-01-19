const chokidar = require('chokidar');
const buildTypeScript = require('./buildTypscript');

// One-liner for current directory
chokidar.watch('./src').on('all', buildTypeScript);