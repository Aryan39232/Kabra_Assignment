const express = require('express')
const app = express()
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000;
var cors = require('cors')



const product = require('./routes/product');
const cart = require('./routes/cart');

// =======
const product = require('./models/product');
const cart = require('./models/carts');
const {addProducts} = require('./controllers/product');
const productRouter = require('./routes/product');
// >>>>>>> eebfefeba9ef9366b0bb3db4091148d66ac1cae4



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


// <<<<<<< HEAD
require('./DB/database');

app.use('/api' , product);
app.use('/api' , cart);


app.use(express.json());
app.use('/api',productRouter);
// app.use('/api' , cart);




app.listen(PORT , () =>{
    console.log(`server is running at port no ${PORT}`);
});

