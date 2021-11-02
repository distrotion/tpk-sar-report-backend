const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow002', async (req, res) => {

    res.json("report");
})

//------------------------------------------------ 01

router.post('/customer_insert', async(req, res) => {
    console.log("-------- customer_insert --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok"}];

    
    res.json(output)
});

//------------------------------------------------ 01

router.post('/process_insert', async(req, res) => {
    console.log("-------- process_insert --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/item_insert', async(req, res) => {
    console.log("-------- item_insert --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/unit_insert', async(req, res) => {
    console.log("-------- unit_insert --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});



module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





