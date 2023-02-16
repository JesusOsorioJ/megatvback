const AddressModel = require('./address.model');

async function getAllAdrress() {
  return await AddressModel.find();
}

async function AdrressByStreet(id) {
    return await AddressModel.find({street:id});}
async function AdrressBycity(id) {
    return await AddressModel.find({city:id});}
async function AdrressByState(id) {
    return await AddressModel.find({state:id});}


module.exports = {getAllAdrress, AdrressByStreet, AdrressBycity, AdrressByState }