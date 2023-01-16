// instead of sending the file in one large instance, send it in chuncks

var http = require('http');
var fs = require('fs');

http
.createServer((req,res) => {
    //const text = fs.readFileSync('./content/biggerFile.txt','utf8');
    //res.end(text);

    const fileStream = fs.createReadStream('./content/biggerFile.txt','utf8'); // read data in chuncks
    fileStream.on('open', () => {
        fileStream.pipe(res); // pushing from the readStream into the write stream. Write data in chuncks
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
})
.listen(5000);