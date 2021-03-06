const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

//Connect to mongo

mongoose
    .connect(db)
    .then(() => console.log('Mongodb connected....'))
    .catch(err => console.log('error ', err));

    // Use Routes

    app.use('/api/items', items);
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
