const express = require('express');
const app = express();
const cors = require('cors');

// MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))


// app.use('/api/user', require('./controllers/userController'))
app.use('/api/products', require('./controllers/productController'))
// app.use('/api/user', require('./controllers/userControl'))
// app.use('/api/order', require('./controllers/orderControl'))
// app.use('/api/contact', require('./controllers/contactControl'))


module.exports = app;