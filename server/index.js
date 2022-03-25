const express = require('express');
const PORT = 3000;
const connectDB = require('./config/config');
const User = require('./models/Auth');
const cors=require('cors');

// CREATE SERVER
const app = express();

//DATABASE CONNECTION

connectDB();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/api/drinks', require('./routes/drinks'));
app.use('/api/food', require('./routes/food'));
app.use('/api/cleaning', require('./routes/cleaningProducts'));
app.use('/api/register', require('./routes/auth'));
app.use('/api/login', require('./routes/auth'));

/*
app.get('/',(req,res)=>{
    res.send('Hola mon')
})*/

app.listen(PORT, (req, res) => {
    console.log("Server running at port " + PORT);
})