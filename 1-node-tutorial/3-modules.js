// Modules
// Node uses commonJS library, every file is module (by default)
// Modules - Encapsulated cde (only share the minimum)
const names = require('./4-names'); // import module
const sayHi = require('./5-utils');
const data = require('./6-alternative flavor');
require('./7-mind-grenade');

console.log(data);

console.log(names);

sayHi('firas');
sayHi(names.john);

