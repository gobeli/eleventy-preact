const { join } = require("path");
const buildClient = require("../../build/client");

module.exports = class Scripts {
  data () {
    return {
      permalink: '/admin.js',
      eleventyExcludeFromCollections: true,
    }
  }

  async render () {
    const entryPoint = join(process.cwd(), 'src', 'client', 'admin.tsx');
    return buildClient(entryPoint);
  }
}