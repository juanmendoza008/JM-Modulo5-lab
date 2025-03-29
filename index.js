// // Comments 2
// const express = require('express')
// // Asigning Route to get there 
// const testRoutes = require('./routes/testRoutes');
// const productRoutes = require('./routes/productRoutes');
// const calculatorRoutes = require('./routes/calculatorRoutes');
// const userRoutes = require('./routes/userRoutes');

// //Original 
// const app = express()
// const port = 3000

// // parse requests of content-type - application/json
// app.use(express.json());

// // Static one just print the default html page
// app.use("/",express.static("public"))
// // Choosing the One to use 
// app.use('/mytest', testRoutes);
// app.use('/myProducts', productRoutes);
// app.use('/calculator', calculatorRoutes);
// app.use('/users', userRoutes);

// app.listen(port, () => {
// console.log(`Example app listening
// at http://localhost:${port}`)
// })


// Comments 1 
// //Hazel solutions constructor diferent app and port
// class App{ 
//     constructor(port,route,endpoint){
//         this.app = express();
//         this.app.get(route,endpoint);
//         this.app.listen(port, () => {
//             console.log(`Example app listening
//             at http://localhost:${port}`)
//             })
//     }
// }

// new App(3001,"/",(req,res) => {
//     res.send('Hello World!')
// })

// new App(3002,"/users",(req,res) => {
//     res.send([{id:1,name:"Jhon",sport:"MMA"}])
// })

// new App(3003,"/character",(req,res) => {
//     res.send([{id:1,name:"IroMan",sport:"Finance"}])
// })

// index.js - updated version
// import the app
const app = require('./app');
const port = 3000
// start the app to listen on the right port
app.listen(port, () => {
console.log(`Example app listening at
http://localhost:${port}`)
})