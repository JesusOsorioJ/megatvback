const ClientsModel = require('./clients.model');

async function createClients(body) {
  return await ClientsModel.create(body);
}

async function getAllClients() {
    return await ClientsModel.find();
  }

module.exports = {createClients, getAllClients}