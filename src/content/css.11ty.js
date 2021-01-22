const { readFile } = require('fs').promises;
const postcss = require('postcss');
const { join } = require('path');

module.exports = class Scripts {
  data () {
    return {
      permalink: '/style.css',
      eleventyExcludeFromCollections: true,
    }
  }

  async render () {
    const entryPoint = join(process.cwd(), 'src', 'client', 'css', 'style.css');
    const css = await readFile(entryPoint);

    const processed = await postcss([
      require('postcss-import'),
      require('postcss-nested'),
      require('autoprefixer')
    ])
      .process(css,  { from: 'src/client/css/style.css', to: 'dist/style.css' })
    
    return processed.css;
  }
}