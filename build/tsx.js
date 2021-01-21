const { join } = require('path');
const glob = require('tiny-glob');
const { render } = require('preact-render-to-string');
const { isValidElement } = require('preact');

const build = require('./build');
const { srcDir, buildDir } = require('./config');

const getBundeFromInputPath = (inputPath) =>
  join(process.cwd(), inputPath.replace(`${srcDir}/`, `${buildDir}/`).replace('.11ty.tsx', '.11ty.js'));

const tsx = {
  read: false,
  data: true,
  getData: true,
  getInstanceFromInputPath: async (inputPath) => {
    try {
      return require(getBundeFromInputPath(inputPath));
    } catch (err) {
      throw new Error(err);
    }
  },
  init: async () => {
    try {
      const entryPoints = await glob(`${srcDir}/{layouts,content,util}/**/*.{ts,tsx}`);
      await build(entryPoints);
    } catch (err) {
      throw new Error(err);
    }
  },
  compile: (permalink, inputPath) => {
    return async (data) => {
      try {
        const renderComp = require(getBundeFromInputPath(inputPath)).render;
        const component = renderComp(data);
        if (isValidElement(component)) {
          return render(component);
        }
      } catch (err) {
        throw new Error(err);
      }
    };
  },
};

module.exports = tsx;
