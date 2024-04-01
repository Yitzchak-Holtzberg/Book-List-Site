# Library Application

This is a simple library application built with JavaScript and Webpack. It allows users to add, remove, and toggle the read status of books in their library. The application uses local storage to persist data across sessions.

## Features

- Add a new book to the library
- Remove a book from the library
- Toggle the read status of a book
- Data is saved in the browser's local storage

## Project Structure

- `js/app.js`: This is the main JavaScript file that contains the logic for adding, removing, and toggling the read status of books.
- `js/bookClass.js`: This file contains the `Book` class definition.
- `js/saveToLocal.js`: This file contains functions for saving and loading the library data to and from local storage.
- `js/validateMe.js`: This file contains the function for validating the input fields in the form.
- `css/style.css`: This file contains all the styles for the application.
- `index.html`: This is the main HTML file.
- `webpack.config.dev.js` and `webpack.common.js`: These files contain the configuration for webpack.

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. If you have Node.js and npm installed, you can run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:8080`.

## Dependencies

- Node.js
- npm
- webpack

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
