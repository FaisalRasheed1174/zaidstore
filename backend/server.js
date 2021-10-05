import express from 'express';
import dotenv from "dotenv"
//env file for variable 
dotenv.config()
//env variables
const port = process.env.PORT || 8000
//app
const app = express()

//DB
// mongoose.connect('mongodb://localhost/zaidstore',
//     useNewUrlParser : true,
//     useCreateIndex: true
// }).then(()=>{
//     console.log("Data Base connceted")
// });

//routes/POST 
app.get('/',(req,res)=>{
    res.send("hello g kaise o g")
});

//routes/POST
// app.get('/api/products',(req,res)=>{
// res.send([1,2,3]);

// })


//listen 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});

//routes to delete an object 
// app.delete('api/courses/:id',(req,res)=>{
 
// })
