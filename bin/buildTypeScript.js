const { buildSync } = require('esbuild');
const glob = require('tiny-glob/sync');
const fs = require('fs-extra');

const buildTypeScript = () => {
  fs.copySync('./src/content', './_js/content', { overwrite: true });
  const entryPoints = glob('./src/**/*.tsx');

  buildSync({
    entryPoints,
    outdir: '_js',
    outbase: 'src',
    bundle: false,
    format: 'cjs',
    platform: 'node',
  });
};

module.exports = buildTypeScript;
