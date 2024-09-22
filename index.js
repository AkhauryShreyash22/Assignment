require('./server');
const express = require("express");
var cors = require('cors')


require("dotenv").config();
require('./models/user.js');
require('./models/blog.js');

const app = express();


const user_router = require('./routes/user.js');
const blog_router = require('./routes/blog.js');
const { connect_mongo } = require('./mongo_connection.js');

const config = process.env;
var db_server = config.db_server;
console.log (db_server, 'db')
connect_mongo(db_server)
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));

const allowedOrigins = ['http://192.168.33.212:3000', 'http://localhost:3001', 'http://localhost:8000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json({extended: false}));

app.use("/users", user_router);
app.use("/blog", blog_router);


app.listen(8000, () => console.log('Application Started For Development'));

console.log('Application Started');