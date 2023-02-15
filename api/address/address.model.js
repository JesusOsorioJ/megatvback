const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
    {
        StreetAddress: {
            type: String,
            required: true,
            trim: true
        },
        City: {
            type: String,
            required: true,
            trim: true,
        },
        State: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('Address', AddressSchema);