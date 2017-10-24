//Rather than requireing all the dependencies for each file, we use a config file.
const express = require('express'); //adding a reference to express.js
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('/Users/scotpfleghaar/Documents/NodeChatApp/NodeChatApp/container.js');

container.resolve(function (users) {
    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function () {
            console.log('listening on port 3000');
        });
        ConfigureExpress(app);
        // Router
        const router = require('express-promise-router')();
        users.SetRouting(router);
    }

    function ConfigureExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
});