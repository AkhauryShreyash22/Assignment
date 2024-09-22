require('./server');
require("dotenv").config();
require('./models/user.js');



const { connect_mongo } = require('./mongo_connection.js');

const config = process.env;
var db_server = config.db_server;
console.log (db_server, 'db')
connect_mongo(db_server)
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));

console.log('Application Started');