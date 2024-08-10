const express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/Amazon').then(()=>{
    console.log('db...');
}).catch((err)=>{
    console.log(err)
})
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let userRoutes = require ('./routes/user')
let loginRoutes = require('./routes/login')
let product = require('./routes/productRoutes')


app.get('/',(req,res)=>{
    res.send("hyy")
})

app.use('/api',userRoutes)
app.use('/api',loginRoutes)
app.use('/api',product)

app.listen(5000,()=>{
    console.log("SERVER IS RUNNING IN PORT NO :5000 ")
})