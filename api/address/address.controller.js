const {
    getAllAdrress,
  } = require('./address.service');

async function handlerAllAddress(req, res) {
    console.log("pase ppor aqui")
    res.json(await getAllAdrress());
  }

module.exports= {handlerAllAddress}