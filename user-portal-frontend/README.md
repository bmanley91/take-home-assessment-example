# User Portal Frontend
The User Portal Frontend is a web application that works in conjunction with the [PatiUserent Portal API](../user-portal-api/../user-portal-frontend/README.md) to give users a convenient way to look up user by event codes and categories. It is built using [Typsecript](https://www.typescriptlang.org/) and [React](https://reactjs.org/).

## Prerequisites
### Node
This application was developed using Node.js v14.15 (the latest LTS version at time of writing).

#### Installation
If not already installed, get [NVM](https://github.com/nvm-sh/nvm) to manage node installations.

Install Node.js with:
```
nvm install 14.15
```

## Running
To reduce boilerplate work, the User Portal Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This toolset gives us out of the box commands for testing, building, and running the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
