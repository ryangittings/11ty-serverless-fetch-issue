const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {  
    name: "serverless", // The serverless function name for the permalink object 
    functionsDir: "./netlify/functions/"
  }); 

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
  };
};
