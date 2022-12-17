module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./assets/css');
    eleventyConfig.addPassthroughCopy('./assets/js/active.js');
    eleventyConfig.addPassthroughCopy('./assets');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}