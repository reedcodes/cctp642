module.exports = function (eleventyConfig) {
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
