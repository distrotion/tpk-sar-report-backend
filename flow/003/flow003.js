const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow003', async (req, res) => {

    res.json("report");
})

//------------------------------------------------ 01

router.post('/customer_update', async(req, res) => {
    console.log("-------- customer_update --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/process_update', async(req, res) => {
    console.log("-------- process_update --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/item_update', async(req, res) => {
    console.log("-------- item_update --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/unit_update', async(req, res) => {
    console.log("-------- unit_update --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

 

    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});




module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





