const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("Welcome to my Hotel")
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuitemRoutes = require('./routes/menuitemRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menuitem', menuitemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port 3000');
})