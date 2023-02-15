const {
    getAllAdrress,
  } = require('./clients.service');

async function handlerCreateClients(req, res) {
    res.json(await createClients());
  }

module.exports= {handlerCreateClients}