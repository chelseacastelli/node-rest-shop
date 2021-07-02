
/**
 * Server Setup
*/
// node doesn't support 'import <something> from <something>'
// must user older technique -- require()
const http = require('http'); // importing http package
const app = require('./app'); // will automatically look for .js extension files

// either through env variable or hard code it in
// process.env --> accesses node.js variables
// if env variable not set, use 3000
const port = process.env.PORT || 3000; // assign port where project should run

const server = http.createServer(app); // creates server that executes whenever we get a request

server.listen(port); // restarts server


