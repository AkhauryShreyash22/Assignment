const { connect_mongo } = require('../mongo_connection.js');
require("dotenv").config();

const config = process.env;
var db_server = config.db_server;
console.log (db_server, 'db')
connect_mongo(db_server)
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));

const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        age: {
            type: String,
            default: 'English'
        }
    },
    {timestamps: true}
);

const user = mongoose.model("user", userschema);

module.exports = user;