const express = require('express')
const app = express()
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000;
var cors = require('cors')


const product = require('./models/product');
const cart = require('./models/carts');
const {addProducts} = require('./controllers/product');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');

// app.use(require('./router/auth'));

// Configure CORS to allow requests from your frontend domain (http://localhost:3000)
require('./DB/database');
app.use(
    cors({
      origin: 'http://localhost:3000', // Replace with your frontend URL in production
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204
    })
);



dotenv.config({ path : './config.env'});


app.use(express.json());
app.use('/api',productRouter);
app.use('/api/cart' , cartRouter);


app.listen(PORT , () =>{
    console.log(`server is running at port no ${PORT}`);
});
