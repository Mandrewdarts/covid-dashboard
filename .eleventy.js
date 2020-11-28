const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // eleventyConfig.addWatchTarget("./_tmp/style.css");

    // eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

    eleventyConfig.addPassthroughCopy({ "./src/js/app.js": "./js/app.js" });

    eleventyConfig.addPassthroughCopy({
        "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
    });

    eleventyConfig.addShortcode("today", function () {
        return new Date(Date.now()).toDateString();
    });

    eleventyConfig.addNunjucksFilter('dateFromInt', function (value) {
        const d = value.toString().split('')
        const year = d.splice(0, 4).join('')
        const month = d.splice(0, 2).join('')
        const date = d.splice(0, 2).join('')
        return new Date(`${month}/${date}/${year}`).toDateString()
    })

    eleventyConfig.addNunjucksFilter('date', function (value) {
        return new Date(value).toDateString()
    })

    eleventyConfig.addNunjucksFilter('number', function (value) {
        return new Intl.NumberFormat('en-US').format(value)
    })

    // eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    //     if (
    //         process.env.ELEVENTY_PRODUCTION &&
    //         outputPath &&
    //         outputPath.endsWith(".html")
    //     ) {
    //         let minified = htmlmin.minify(content, {
    //             useShortDoctype: true,
    //             removeComments: true,
    //             collapseWhitespace: true,
    //         });
    //         return minified;
    //     }

    //     return content;
    // });

    return {
        templateFormats: ['md', 'njk'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            layouts: '_includes/layouts'
        }
    }
};