module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("Thumbnails");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

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




