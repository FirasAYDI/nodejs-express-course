const {readFile, writeFile} = require('fs'); //import readFileSync & writeFileSync from fs module.

console.log('start');

readFile('./content/first.txt','utf8', (err, result) => { // if utf8 not added we get a buffer
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,{flag : 'a'}, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result); // does not return the result printed in the created file
            console.log('done with this task');
        });
    });
});
console.log('strating next task');