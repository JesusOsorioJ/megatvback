const {
    getAllAdrress,
  } = require('./address.service');

async function handlerAllAddress(req, res) {
    res.json(await getAllAdrress());
  }

module.exports= {handlerAllAddress}