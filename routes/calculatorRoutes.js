const express = require('express');

const calculatorController = require('../controllers/calculatorController')

const router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

router.get('/multiply', (req, res) => {
    calculatorController.mulNumbers(req,res)
})

router.get('/subtract', (req, res) => {
    calculatorController.subNumbers(req,res)
})

router.get('/divide', (req, res) => {
    calculatorController.divNumbers(req,res)
})

// Operation withput the controller
// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query?.num1) || 0;
//     let number2 = parseInt(req.query?.num2) || 0;

//     let result = number1 + number2;
    
//     console.log("Add: ",result);
    
//     res.status(200);
//     res.send({result});
// })

// router.get('/multiply', (req, res) => {
//     let number1 = parseInt(req.query?.num1) || 0;
//     let number2 = parseInt(req.query?.num2) || 0;

//     let result = number1 * number2;
    
//     console.log("Mul: ",result);
    
//     res.status(200);
//     res.send({result});
// })

// router.get('/subtract', (req, res) => {
//     let number1 = parseInt(req.query?.num1) || 0;
//     let number2 = parseInt(req.query?.num2) || 0;

//     let result = number1 - number2;
    
//     console.log("Sub: ",result);
    
//     res.status(200);
//     res.send({result});
// })

// router.get('/divide', (req, res) => {
//     let number1 = parseInt(req.query?.num1) || 0;
//     let number2 = parseInt(req.query?.num2) || 0;

//     let result = number1 / number2;
    
//     console.log("Div: ",result);
    
//     res.status(200);
//     res.send({result});
// })

module.exports = router;