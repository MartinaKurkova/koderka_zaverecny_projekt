module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("Thumbnails");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPassthroughCopy("favicon-96x96.png");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest"); 

  return {
    dir: {
      input: ".",         // Kořenová složka jako vstup
      output: "_site",    // Výstupní složka
    },
    templateFormats: ["njk", "html", "md", "liquid"],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};




