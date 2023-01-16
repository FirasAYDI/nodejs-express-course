const {createReadStream} = require('fs');

// create instance called stream
const stream = createReadStream('./content/big.txt',{
    highWaterMark: 90000,
    encoding : 'utf8'
}); 

// default size of buffer is 64kb
// last buffer - remainder
// highWaterMark - control buffer size


stream.on('data', (result) => { // once we create the stream instance we have access to the events
    console.log(result);
});
stream.on('error', (err) => console.log(err));

