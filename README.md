# Cache Busting a React App

As great as caching is — cache invalidation has been a struggle for a long time now.

There are different approaches that work for different types of websites. I recently had to invalidate the cache of a web app every time a new version has been released. After trying out a few approaches, I settled with an approach that has proven to work every single time.

## Concept

- We want the site to load from the cache if there is no new version
- We want to refresh the cache every time a new version of the app is deployed
- We use npm package versioning to version our app and each deploy will be versioned incrementally
- We generate a `meta.json` file along with every build in the public dir and it will act as a REST endpoint (won't be cached in browser)
- We refresh cache (`window.location.reload(true)`) in the browser whenever a new version is released

## License

Copyright (c) 2019 Dineshkumar Pandiyan
