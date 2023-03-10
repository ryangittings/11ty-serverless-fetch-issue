require("dotenv").config();
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
	try {
		let json = await EleventyFetch("https://dummyjson.com/products/1", {
			type: "json",
			duration: process.env.ELEVENTY_SERVERLESS ? "*" : "1d",
			directory: ".cache/eleventy-fetch/",
      dryRun: process.env.ELEVENTY_SERVERLESS ? true : false,
      verbose: true,
		});

		return {
			title: json.title
		};
	} catch(e) {
		// if(process.env.NODE_ENV === "production") {
		// 	// Fail the build in production.
		// 	return Promise.reject(e);
		// }

		console.log( "Failed getting product" );
		return {
			title: ""
		};
	}
};
