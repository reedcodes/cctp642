module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/reveal.js/dist/reveal.js": "assets/js/reveal.js"
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
