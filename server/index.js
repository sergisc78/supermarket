const express=require('express');
const PORT=3000;
const connectDB=require('./config/config')


// CREATE SERVER
const app=express();

//DATABASE CONNECTION

connectDB();

//MIDDLEWARE
app.use(express.json());
app.use('/api/drinks',require('./routes/drinks'));

/*
app.get('/',(req,res)=>{
    res.send('Hola mon')
})*/

app.listen(PORT,(req,res)=>{
    console.log("Server running at port " + PORT);
})