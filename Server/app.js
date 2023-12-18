const express = require('express')
const app = express()
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000;
var cors = require('cors')


const product = require('./models/product');
const cart = require('./models/carts');


// app.use(require('./router/auth'));

// Configure CORS to allow requests from your frontend domain (http://localhost:3000)
app.use(
    cors({
      origin: 'http://localhost:3000', // Replace with your frontend URL in production
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204
    })
);



dotenv.config({ path : './config.env'});


require('./DB/database');

app.use('/api' , product);
app.use('/api' , cart);
app.use(express.json());



app.listen(PORT , () =>{
    console.log(`server is running at port no ${PORT}`);
});
