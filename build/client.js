const { build } = require("esbuild");
const { prod } = require("./config");

const buildClient = (entryPoint) => {
  return build({
    entryPoints: [entryPoint],
    write: false,
    bundle: true,
    format: 'iife',
    platform: 'browser',
    minify: prod
  }).then(res => {
    return res.outputFiles[0].contents;
  });
}

module.exports = buildClient