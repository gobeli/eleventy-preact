const tsx = require('./build/tsx');

module.exports = function (config) {
  config.addPassthroughCopy('static');
  config.addPassthroughCopy({ 'src/content/admin/config.yml': 'admin/config.yml' });

  config.addWatchTarget('src/client');
  config.addWatchTarget('src/util');

  config.addTemplateFormats('11ty.tsx');
  config.addExtension('11ty.tsx', tsx);

  return {
    dir: {
      input: 'src/content',
      output: 'dist',
      includes: '../_includes',
      layouts: '../layouts',
    },
  };
};
