const http = require('http');

const server = http.createServer((req, res) => { 
    // req : object containing request prop and method frm the web request
    // res : object containing the result that will be sent back to the web page
    //console.log(req);

    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
    } else { 
        res.end(`
        <h1>Oops!</h1>
        <a href="/">back home</a>`);
    }
    //res.write('Welcome to our home page');
    //res.end(); // end the request
});


server.listen(5000); //the server will keep listening to requests