const
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    serverless = require("serverless-http"),
    mongoose = require('mongoose');

const
    personRouter = require('./routes/person');

/**
 * person lambda for handling person API calls
 */

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/person', personRouter);

const dev_db_url = 'REPLACE_THIS_WITH_YOUR_DATABASE';
let mongoDBURL = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("Connection Success")

module.exports.handler = serverless(app);
