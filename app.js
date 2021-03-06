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
const ordersRoute = require('./routes/order');
const opinionsRoute = require('./routes/opinion');
const usersRoute = require('./routes/user');

app.use('/products', productsRoute);
app.use('/order', ordersRoute);
app.use('/opinion', opinionsRoute);
app.use('/user', usersRoute);

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