const ClientsModel = require('./clients.model');

async function createClients() {
  return await ClientsModel.find();
}

module.exports = {createClients}