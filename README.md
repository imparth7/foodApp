# Delicious - Food App

![Delicious Logo](https://github.com/imparth7/foodApp/blob/main/public/DeliciousLogo.png)

This is a React application that allows users to search for recipes, browse recipes by category, and view detailed information about recipes.

## Getting Started

To get started, clone the repository and install the dependencies.

```bash
git clone https://github.com/imparth7/Delicious-Food.git
cd Delicious-Food
npm install
```

Once the dependencies are installed, you can start the development server.

```bash
npm start
```

The development server will run on port 3000. You can access the application by visiting http://localhost:3000 in your browser.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

```
REACT_APP_API_KEY=here_put_your_APIKey
```

For the api key you have login to [spoonacular.com](https://spoonacular.com/food-api), and go to profile there below show the API Key, just copy and paste to your environment file.

## Development

To contribute to the development of Delicious, simply clone the repository and start coding. The app is built using React 18 and React Libraries.

## Features

- Suggested best foods
- Search Foods
- Browse any recipe
- Cuisine Category
- Recipes with Instruction and Ingredients

## Technologies

- React 18
- React Icons
- React Router DOM
- Styled Components
- React Splide
- Framer Motion

## Lessons Learned

- Basics of React and React Components
- API Calling using fetch api, use .env of file and import env file api key.
- Framer Motion for amazing and interactions motion with zero code & maximum speed.
- React router dom for single page application that have many pages but never refresh react app.
- React Splide construct versatile and adaptable carousel component that seamlessly integrated.

## File Structure

```
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│
└───src
    │   apis.js
    │   App.css
    │   App.js
    │   App.test.js
    │   index.css
    │   index.js
    │   logo.svg
    │   reportWebVitals.js
    │   setupTests.js
    │
    ├───components
    │       Category.jsx
    │       Popular.jsx
    │       Search.jsx
    │       Veggie.jsx
    │
    └───pages
            Cuisine.jsx
            Home.jsx
            Pages.jsx
            Recipe.jsx
            Searched.jsx
```

## Code Structure

The codebase is structured as follows:

- **`public/`**: This directory contains the static assets for the application, such as the HTML, CSS, and JavaScript files.
- **`src/`**: This directory contains the source code for the application.
    - `App.css`: This file contains the CSS styles for the application.
    - `App.js`: This file contains the main component for the application.
    - `index.css`: This file contains the global CSS styles for the application.
    - `index.js`: This file contains the entry point for the application.
    - `apis.js`: This file contains the API endpoints that are used by the application.
    - **`components/`**: This folder contains components are most used in this app.
        - `Category.jsx`: This file contains the component that displays the recipe categories.
        - `Popular.jsx`: This file contains the component that displays the popular recipes.
        - `Search.jsx`: This file contains the component that allows users to search for recipes.
        - `Veggie.jsx`: This file contains the component that displays the vegetarian recipes.
    - **`pages/`**: This folder app pages.
        - `Cuisine.jsx`: This file contains the component that displays the recipes for a specific cuisine.
        - `Home.jsx`: This file contains the component that displays the home page.
        - `Pages.jsx`: This file contains the component that manages the routing for the application.
        - `Recipe.jsx`: This file contains the component that displays the detailed information about a recipe.
        - `Searched.jsx`: This file contains the component that displays the recipes that match a search query.
- `.env`: This file contains the REACT_APP_API_KEY of the spoonacular.com recipe api.

---

## Screenshots

> `Home Screen`
![Delicious Home Screen](https://github.com/imparth7/foodApp/blob/main/public/app_screenshots/Home.png)

> `Cuisine Screen`
![Delicious Cuisine Screen](https://github.com/imparth7/foodApp/blob/main/public/app_screenshots/Cuisine.png)

> `Search Result Screen`
![Delicious Search Result Screen](https://github.com/imparth7/foodApp/blob/main/public/app_screenshots/Search.png)

> `Recipe Detail Screen`
![Delicious Recipe Detail Screen](https://github.com/imparth7/foodApp/blob/main/public/app_screenshots/Recipe.png)

## License

Delicious is licensed under the MIT license. See the [MIT](https://choosealicense.com/licenses/mit/) for more information.
