const { build } = require("esbuild");
const { srcDir, buildDir } = require("./config");

const buildSources = entryPoints => {
  return build({
    entryPoints,
    outdir: buildDir,
    outbase: srcDir,
    bundle: false,
    format: 'cjs',
    platform: 'node',
  });
}

module.exports = buildSources;