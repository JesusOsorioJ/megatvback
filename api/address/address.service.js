const AddressModel = require('./address.model');

async function getAllAdrress() {
  return await AddressModel.find();
}

module.exports = {getAllAdrress}