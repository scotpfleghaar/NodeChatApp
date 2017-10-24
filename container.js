const dependable = require('dependable');
const path = require('path');
const container = dependable.container();

//Add new dependables here:
const simpleDependencies = [
    ['_', 'lodash']
];
simpleDependencies.forEach(function (val) {
    container.register(val[0], function () {
        return require(val[1]);
    });
});

container.load(path.join(__dirname, '/controllers'));
container.load(path.join(__dirname, '/helpers'));

container.register('container', function () {
    return container;
});

//Export the config globally
module.exports = container;

// Lets say we need to add an async file, do it the following way:
// const simpleDependencies = [
//     ['async', 'lodash'],
// ];
// const async = require('async');