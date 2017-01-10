// this file is not transpiled so must use commonjs and ESS

// register babel to transpile before our tests run
require('babel-register');

//disable webpack features that Mocha doesnot understand

require.extensions['.css'] = function(){};
