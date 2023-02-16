const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
    {
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        state: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('Address', AddressSchema);