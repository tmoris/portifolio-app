# Tibenkana Moris's Portfolio

Welcome to the repository for my personal portfolio website. This site showcases my development projects and skills, in addition to providing information about me, my career journey, and how to get in touch.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Installation and Usage](#installation-and-usage)
4. [Portfolio Projects](#portfolio-projects)
5. [Future Improvements](#future-improvements)
6. [Contact](#contact)
7. [Contributing](#contributing)
8. [License](#license)

## Technologies Used

- HTML
- CSS
- JavaScript
- SCSS
- Node.js
- Gulp

## Project Structure

- `public/`: The public folder which will be served by the server.

  - `index.html`: The main HTML file representing the home page of the portfolio.
  - `assets/`: This directory contains:
    - `imgs/`: This directory contains all images used in the portfolio.
    - `js/`: This directory contains all Javascript files, including typed.js for animated text effects.
    - `mail/`: This directory contains files related to mailing functionality.
  - `css/`: This directory contains all CSS files compiled from SCSS.

- `src/`: The source folder containing the original uncompiled code.
  - `assets/`: This directory contains:
    - `imgs/`: This directory contains the source images used in the portfolio.
    - `js/`: This directory contains all the source Javascript files, including typed.js.
    - `mail/`: This directory contains source files related to mailing functionality.
  - `sass/`: This directory contains all SCSS files which are compiled to CSS. It is further divided into:
    - `abstracts/`: This directory contains Sass tools and helpers (variables, functions, mixins etc.).
    - `base/`: This directory has the boilerplate code for the project like reset, typography etc.
    - `components/`: This directory contains each component in its own Sass file.
    - `layout/`: This directory contains styles for the larger layout components; e.g. nav, header, footer.
    - `pages/`: This directory contains page-specific styles, if any.

## Installation and Usage

1. Clone this repository: `git clone https://github.com/tmoris/tibenkana-moris-portifolio-app.git`.
2. Navigate to the project directory in the terminal: `cd tibenkana-moris-portifolio-app`.
3. Install project dependencies: `npm install`. This assumes that you have Node.js and npm installed on your machine.
4. Build the project using npm: `npm run build`. This command copies your HTML files and builds your Sass files into CSS, autoprefixing and minifying them for optimal performance.
5. Start the project using npm: `npm start`. This command copies your assets, sets up watchers for changes to your HTML, Sass, and asset files, and starts the Browsersync server.
6. Open your web browser and visit `http://localhost:3000` (or whatever your server port is).

   Note: If you're not familiar with some of the terms or tools used in these instructions, you might want to look up npm scripts, Sass, Browsersync, and other tools used in the project for a better understanding.

## Portfolio Projects

The projects in my portfolio cover a wide range of areas in web development, including:

- Front-end development with HTML, CSS, and JavaScript.
- Back-end development with python Flask.
- Full-stack web development projects.

Each project includes a description, the technologies used, and links to both the live site and the source code.

## Future Improvements

- Improve the site's responsiveness for optimal display on mobile devices.
- Add more interactive elements to improve user engagement.

## Contact

I welcome feedback, opportunities, collaborations, or friendly chats. You can reach me at:

- [Email](mailto:tibenkanamoris@gmail.com)
- [GitHub](https://github.com/tmoris)

- [LinkedIn](https://www.linkedin.com/in/moris-tibenkana-34116b182/)

## Contributing

While this project is primarily a personal portfolio, input and suggestions for improvements are always welcome. Feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
