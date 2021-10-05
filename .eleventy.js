// Github Pages are in the form https://USERNAME.github.io/REPOSITORY/
// but my local environment is set up differently. Check the SITE_ENV
// that's passed in through the build script, and set that as the dirPath.
const dirPath = ( process.env.SITE_ENV == 'dev' ) ? '/cctp642/docs' : '/cctp642';

module.exports = function (eleventyConfig) {
  // Pass through some of the files needed, instead of always copy/paste
  // to the build/docs directory, or creating them through a script.
  eleventyConfig.addPassthroughCopy( {
    "./node_modules/reveal.js/dist/reveal.js": "assets/js/reveal.js",
    "./node_modules/reveal.js/dist/reveal.js.map": "assets/js/reveal.js.map",
    "./node_modules/reveal.js/plugin/markdown": "assets/js/reveal/markdown"
  } );

  // Set up a shortcode for reveal.js slides. Can be updated later if
  // additional paramaters are needed.
  eleventyConfig.addPairedShortcode( 'revealsection', ( content ) => {
    return `<section data-markdown><textarea data-template>${content}</textarea></section>`;
  } );

  return {
    pathPrefix: dirPath,
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      output: "docs"
    }
  };
};
