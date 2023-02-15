const clients= require('./api/clients')
const address = require('./api/address');

function routes(app){
    app.use('/api/clients', clients)
    app.use('/api/address', address)
}

module.exports = routes