const {
    getAllAdrress,AdrressByStreet, AdrressBycity, AdrressByState
  } = require('./address.service');

async function handlerAllAddress(req, res) {
    res.json(await getAllAdrress());
  }

  async function handlerAllAddressBy(req, res) {
      const { id } = req.params;
      let street =await AdrressByStreet(id)
       if (street.length != 0){
        return res.json(street)
       }
       let city = await AdrressBycity(id)
       if (city  != 0){
        return res.json(city)
       }
       let state =  await AdrressByState(id)
       if (state != 0){
       return res.json(state)
       }
       return res.json([])
    
  }

module.exports= {handlerAllAddress, handlerAllAddressBy}