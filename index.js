
const express = require('express')
// //Original 
const app = express()
const port = 3000

app.use("/",express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})


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