const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow004', async (req, res) => {

    res.json("report");
})

router.post('/customer_delete', async(req, res) => {
    console.log("-------- customer_delete --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/process_delete', async(req, res) => {
    console.log("-------- process_delete --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/item_delete', async(req, res) => {
    console.log("-------- item_delete --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

//------------------------------------------------ 01

router.post('/unit_delete', async(req, res) => {
    console.log("-------- unit_delete --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

 

    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});




module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





