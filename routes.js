const routes = require('next-routes') ();



// const routes = (module.exports = require('next-routes')());
routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address','/campaigns/show');

module.exports = routes;