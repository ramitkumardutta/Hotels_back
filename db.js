const mongoose = require('mongoose');
require('dotenv').config();


//todos Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//todos Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//todos Get the default connection
//todos Mongoose maintains a default connection object representing the MongoDB connection

const db = mongoose.connection;

//todos Define event Listners for databas connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
 
db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Exports the database connection
module.exports = db;