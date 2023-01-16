// npm - global command, comes with node
// npm --version

// local dependency - use it only in a particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about prject/package)
// manual approach (create package.json in the root, create properties etc...)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// .gitignore : file that contains file names to ignore when you push a code to a ripo on github

// setup a devDependency in JSON file : npm i nodemon -D
// Devdependencies are to store modules used for app creation and testing
// dependencies prop is for modules that will be used in production

// npm start
// npm run dev

// npm uninstall bootstrap

// Example with lodash module
const _ = require("lodash");
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello");