# 11ty Serverless Fetch

So, here's a test case to describe my issue.

Two URLs:

- /build/
- /serverless/

Deploy this repo to Netlify, and monitor both the build logs, and the serverless function log.

Hit the serverless endpoint, and with every hit you'll see the following log:


```
Mar 10, 08:05:58 PM: b2f48a61 INFO   [11ty/eleventy-fetch] Fetching: https://dummyjson.com/products/1Mar 10, 08:05:59 PM: b2f48a61 WARN   [11ty] Benchmark     85ms  41%     1× (Data) `./src/_data/github.js`Mar 10, 08:05:59 PM: b2f48a61 Duration: 219.33 ms	Memory Usage: 98 MB	

Mar 10, 08:06:00 PM: 3b050401 INFO   [11ty/eleventy-fetch] Fetching: https://dummyjson.com/products/1Mar 10, 08:06:00 PM: 3b050401 WARN   [11ty] Benchmark     30ms  78%     1× (Data) `./src/_data/github.js`Mar 10, 08:06:00 PM: 3b050401 Duration: 40.25 ms	Memory Usage: 99 MB	

Mar 10, 08:06:12 PM: dc4bef4e INFO   [11ty/eleventy-fetch] Fetching: https://dummyjson.com/products/1Mar 10, 08:06:12 PM: dc4bef4e WARN   [11ty] Benchmark     39ms  84%     1× (Data) `./src/_data/github.js`Mar 10, 08:06:12 PM: dc4bef4e Duration: 48.99 ms	Memory Usage: 99 MB	

Mar 10, 08:06:21 PM: 9860b6fd INFO   [11ty/eleventy-fetch] Fetching: https://dummyjson.com/products/1Mar 10, 08:06:21 PM: 9860b6fd WARN   [11ty] Benchmark     30ms  40%     1× (Data) `./src/_data/github.js`Mar 10, 08:06:21 PM: 9860b6fd Duration: 97.13 ms	Memory Usage: 100 MB	
```

You can see everytime the serverless function is hit, the URL is fetched from source.