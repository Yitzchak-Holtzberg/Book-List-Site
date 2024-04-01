// Exporting a configuration object for webpack
const {resolve} = require("node:path");
module.exports = {
  // The entry point(s) of the application. This is where webpack starts the bundling process
  entry: {
    // The main application file located in the 'js' directory
    app: './js/app.js',
  },
  output: {
    // The path where the bundled files will be served from
    path: resolve(__dirname, 'dist'),
    // A boolean value that tells webpack to clean the output directory before adding new files
    clean: true,
    // The filename of the bundled output file
    filename: './js/app.js',
  },
};
