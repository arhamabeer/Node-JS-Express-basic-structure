const exp = require("express");
const bd = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRoute = require('./src/router/main')
const app = exp();
const port = 4050;

app.use(cors());
app.use(bd.urlencoded({ extended: false }));
app.use(bd.json());

app.use(mainRoute)

mongoose.connect(
  "mongodb+srv://arham:meArhamHun@123@learning.xpm4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);  



mongoose.connection.on("connected", () => {
  console.log("Database Connected!");
});

mongoose.connection.on("error", () => {
  console.log("Database not Connected!");
});



app.listen(port, () => {
  console.log("Server Running...");
});



// const exp = require('express')
// const bd = require('body-parser')
// const cors = require('cors')
// const mongoose = require('mongoose')
// let authModel = require('./authschema')
// const { response } = require('express')

// const app = exp();
// const port = 5000;

// app.use(cors())         // frontend sy aane wale data ko permission dena
// app.use(bd.urlencoded({extended: false})) // ye bh permission k lye hota h
// app.use(bd.json())      // frontend sy data json form me ana chahie

// mongoose.connect("mongodb+srv://arham:meArhamHun@123@cluster0.xpm4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.on('connected',()=>{
//     console.log("Database Connected...!!!")
// })

// mongoose.connection.on('error',()=>{
//     console.log("Database not Connected...!!")
// })

// app.get('/', (req, res) => {
//     res.send('Hala Madrid')
// })

// app.post('/signup',(req,res)=>{
//     // res.send('postman to post')
//     // console.log(req.body)
//    let createUser = new authModel({email: req.body.email, password: req.body.password})
//    createUser.save()
//    .then((response)=>{
//     //    console.log('response=> ', response)
//     res.status(200).send({result: response, message: 'Data gaya...'})
//    })
//    .catch((err)=>{
//     //    console.log('err=> ', err)
//     res.status(400).send({result: err, message: 'Data shapatar...'})
//    })
// })

// app.listen(port, () => {
//     console.log('Server is running')
// })
