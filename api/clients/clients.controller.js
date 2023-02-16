const {
    createClients, getAllClients
  } = require('./clients.service');

async function handlerCreateClient(req, res) {
  const newClient = req.body;
  try {
    const client = await createClients(newClient);
    return res.status(201).json(client);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function handlerAllClients(req, res) {
    res.json(await getAllClients());
  }

module.exports= {handlerCreateClient, handlerAllClients}