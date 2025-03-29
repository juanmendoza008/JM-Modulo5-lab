// Lab 2 & 3
const addNumbers = (req, res) => {
    if(!req.query?.num1 || !req.query?.num2){
        res.status(422);
        res.send({result:"Not valid values"});
    }

    let number1 = parseInt(req.query?.num1) || 0;
    let number2 = parseInt(req.query?.num2) || 0;

    let result = number1 + number2;
    
    console.log("Add: ",result);
    
    res.status(200);
    res.send({result});
}

const mulNumbers = (req, res) => {
    let number1 = parseInt(req.query?.num1) || 0;
    let number2 = parseInt(req.query?.num2) || 0;

    let result = number1 * number2;
    
    console.log("Mul: ",result);
    
    res.status(200);
    res.send({result});
}

const subNumbers = (req, res) => {
    let number1 = parseInt(req.query?.num1) || 0;
    let number2 = parseInt(req.query?.num2) || 0;

    let result = number1 - number2;
    
    console.log("Sub: ",result);
    
    res.status(200);
    res.send({result});
}

const divNumbers = (req, res) => {
    let number1 = parseInt(req.query?.num1) || 0;
    let number2 = parseInt(req.query?.num2) || 0;

    let result = number1 / number2;
    
    console.log("Div: ",result);
    
    res.status(200);
    res.send({result});
}


module.exports = {
    addNumbers,
    mulNumbers,
    subNumbers,
    divNumbers,
};

