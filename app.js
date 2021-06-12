const express = require('express');
 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');//deprecated
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(express.json());

//Import Routes
const productsRoute = require('./routes/products');

app.use('/products', productsRoute);

//Routes
app.get('/', (req,res) => {
    res.send("HI");
})


//Conect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => console.log('connected to DB')
);

//How start listening
app.listen(3000);