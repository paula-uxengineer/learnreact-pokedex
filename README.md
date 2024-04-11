# React Pokédex 

>This project forms part of a series dedicated to learning React through practical application.

## About

This project is a web application that simulates a Pokédex using React, a JavaScript library for building user interfaces. The Pokédex allows users to search for information about different Pokémon, such as their statistics and abilities.

## Learnings
During the development of this project, several learnings and skills were acquired in various areas:

1. Making API requests
The PokeAPI (https://pokeapi.co/) was utilized to retrieve data about Pokémon. This involved learning to make HTTP requests using JavaScript's fetch function to obtain information about Pokémon, such as their name, image, and statistics.

2. Creating components

Multiple components were created in React to construct the Pokédex's user interface. Each component was designed to be reusable and modular, facilitating the maintenance and extension of the project.

3. Passing props from parent to child

The concept of "props" in React was used to pass data from a parent component to a child component. This allowed sharing information between different components of the application and dynamically updating the content of the user interface.

4. Rendering components

The render() method of React was employed to render components in the DOM. This involved composing smaller components into larger ones and structuring the application hierarchically.

5. Handling events in the DOM

User events, such as clicks and input changes, were managed using React's event system. This enabled creating intuitive interactions in the Pokédex, such as Pokémon searching and navigation between different views.

6. CSS animations

CSS animations were applied to enhance the user experience and make the user interface more dynamic and visually appealing. These animations were used to highlight certain elements of the Pokédex and provide visual feedback to the user.


## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
