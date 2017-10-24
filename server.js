//Rather than requireing all the dependencies for each file, we use a config file.
const express = require('express'); //adding a reference to express.js
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const containter = require('/container');

container.resolve(function () {
    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function () {
            console.log('listening on port 3000')
        });
    }
});