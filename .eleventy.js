module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/reveal.js/dist/reveal.js": "assets/js/reveal.js",
    "./node_modules/reveal.js/dist/reveal.js.map": "assets/js/reveal.js.map",
    "./node_modules/reveal.js/plugin/markdown": "assets/js/reveal/markdown"
  } );

  eleventyConfig.addPairedShortcode( 'revealsection', ( content ) => {
    return `<section data-markdown><textarea data-template>${content}</textarea></section>`;
  } );

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      output: "docs"
    }
  };
};
