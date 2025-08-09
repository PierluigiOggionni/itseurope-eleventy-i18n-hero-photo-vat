module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});
  eleventyConfig.addPassthroughCopy({"src/humans.txt": "humans.txt"});

  eleventyConfig.addCollection("allPages", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.permalink);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Simple URL helper for language switch
  eleventyConfig.addNunjucksShortcode("langUrl", function(lang, url) {
    // url like /it/index.html -> switch to /en/... and vice versa
    try {
      const parts = url.split("/").filter(Boolean);
      if(parts.length === 0) return `/${lang}/`;
      parts[0] = lang;
      let out = "/" + parts.join("/");
      if(!out.endsWith("/")) out = out.replace(/\.html$/, "/");
      return out;
    } catch(e) {
      return `/${lang}/`;
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
