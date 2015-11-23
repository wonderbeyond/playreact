This is my test project forked from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).
I use to test combination of ES6 + npm/CommonJS + Webpack + ReactJS.

## Refs

- https://github.com/webpack/webpack/issues/86
- http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/

## Passed features

- es6 to es5
- jsx to js
- assets revision
- output assets.json

## Expected features

- Fully mirror src_dir to dist_dir, with expected transformations.
- Replace reference in html templates, and output html files

## To use

There are several simple server implementations included. They all serve static files from `public/` and handle requests to `/api/comments` to fetch or add data. Start a server with one of the following:

### Server

```sh
npm install
node server.js
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
