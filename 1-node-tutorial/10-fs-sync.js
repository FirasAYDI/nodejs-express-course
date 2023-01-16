const {readFileSync, writeFileSync} = require('fs'); //import readFileSync & writeFileSync from fs module.

// js will read the script synchronously : line by line
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag : 'a'}); // with the flag a node will append the new text instead of overwriting

console.log('done with thos task');
console.log('starting the next one');



