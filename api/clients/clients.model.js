const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true
        },
        secondName: {
            type: String,
            required: true,
            trim: true,
        },
        plan:{
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('Clients', ClientsSchema);