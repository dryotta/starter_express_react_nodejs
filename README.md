# Getting started on Express, React and Node.js on Windows and Azure

## References

* [React + Express Tutorial](https://medium.com/javascript-in-plain-english/how-to-build-a-simple-react-app-with-express-api-b4ab3d16f06d)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [Deploy to Azure from Github](https://www.freecodecamp.org/news/how-to-deploy-your-super-cool-node-app-to-azure-from-github-47ebff6c5448/)
* [Azure Node.js configuration](https://docs.microsoft.com/en-us/azure/app-service/containers/configure-language-nodejs)


## Setting up global environment (windows)

First, set up [scoop](https://scoop.sh/) for a nice and clean way to manage packages on windows. Scoop install under your profile directory `C:\Users\<user>\scoop` by default which won't mess up with rest of the system.

In PowerShell, run
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# press [Y]
 
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

```

Install Node.js and yarn

```
scoop install nodejs-lts yarn
```

Install MongoDb if needed, and run as service

```
scoop install mongodb
mongod --install
net start MongoDB
```

## Build and run

Clone this repo, and run `yarn` to install dependencies and then run any of the scripts defined in `package.json`.

### `yarn start-dev`

This script runs `start-server-dev` and `start-client-dev` concurrently to start both node.js/express server and react client in the development mode. The script can also be running individually.

`start-client-dev` opens [http://localhost:3000](http://localhost:3000) to view the react app in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
The react app can accessing the node server through `proxy` setting in `package.json`.

`start-server-dev` runs the node.js/express server on [http://localhost:4000](http://localhost:4000). The `server` directory is monitored and `nodemon` will automatically refresh/restart the server so you can continue testing the changes.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build-noserver`

Build react app that can be run locally from `index.html`.

### `yarn start`

Runs the node.js/express server with production react client. You need to run `yarn build` first.

## Tips and tricks

### Delete `node_modules` fast

Instal rimraf

```
yarn global add rimraf
```

and run

```
rimraf node_modules
```

### Manual steps to set up the package dependencies

```
yarn create react-app starter
yarn add express body-parser compression cookie-parser cors helmet

yarn add -D concurrently cross-env nodemon

yarn add react-router-dom
yarn add react-bootstrap bootstrap

```

