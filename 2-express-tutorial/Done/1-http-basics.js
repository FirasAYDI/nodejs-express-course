const http = require('http');
const {readFileSync} = require('fs');

// get all files
const aboutPage = readFileSync('./about-page.html');
const navbarPage = readFileSync('./navbar-app/index.html');
const navbarStyles = readFileSync('./navbar-app/styles.css');
const navbarImage = readFileSync('./navbar-app/logo.svg');
const navbarLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req,res) => {
    //console.log(req.method); // will return the GET method
    console.log(req.url); // wil return url

    const url = req.url;

    if(url === '/') {
        res.writeHead(200,{'content-type':'text/html'}); // Need tp precise the content type to the browser and also to attach he status code
        res.write('<h1>home page</h1>'); // it is possible to put a file name as argument in order to pass the file content. example : html file.
    
        //The res.end() method signals to the server that all of the response headers and body have been sent; 
        //that server should consider this message complete. 
        //The method, response.end(), MUST be called on each response.
        res.end();
    } else if (url === '/about') {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(aboutPage);
        res.end();
    } else if (url ==='/navbar') {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(navbarPage);
        res.end();
    } else if (url ==='/styles.css') {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(navbarStyles);
        res.end();
    } else if (url ==='/browser-app.js') {
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(navbarLogic);
        res.end();
    } else if (url ==='/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(navbarImage);
        res.end();
    }
    
    
    
    
    else {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>404 page not found</h1>');
        res.end();
    }   
})
.listen(5000);