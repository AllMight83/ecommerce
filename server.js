require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const url = process.env.MONGODB_URL



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, error => {
    if(error) throw error;
    console.log('Conectado a MongoDB!!');
});

// const libros = require('./router/libros');
// app.use('/', libros)

app.use('/api', require('./router/libros'))







// app.use('/', require('./router/libros'))

app.listen(5000, () => {
    console.log('Conectado al puerto 5000!!!');
})