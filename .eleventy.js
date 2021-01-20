const { isValidElement } = require('preact');
const { render } = require('preact-render-to-string');

const fs = require('fs-extra');

module.exports = function (config) {
  fs.ensureDirSync('./_js');

  config.setUseGitIgnore(false);
  config.addPassthroughCopy('static');
  config.addPassthroughCopy({ 'src/content/admin/config.yml': 'admin/config.yml' });
  config.addPassthroughCopy({ '_js/client': 'client' });

  config.addTransform('jsx', (content) => {
    if (isValidElement(content)) {
      return `<!doctype html>${render(content)}`;
    }

    return content;
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: '_js/content',
      output: 'dist',
      includes: '../_includes',
      layouts: '../layouts',
    },
  };
};
