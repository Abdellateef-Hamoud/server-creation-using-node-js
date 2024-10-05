const http = require('http')  //http module / package
const date = require('./date.module')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  //headers
    res.write("Hello in my first node js code");

    res.end(`the Time is ${date.getCurrentTime()}`);
    
}).listen(9999, () => {         //port number
    console.log('Server is running on http://localhost:9999');
});
//localhost:9999


///////////////////////////////////////////

//modules

//built in modules    like "http"

//External modules - third part modules like   download any package from npm website as "react" or "expressjs"

//Your own modules    like modules in code in any company as "amazon" or any modules that you make it in your code and you can use it in any other code  

