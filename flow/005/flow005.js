const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow005', async (req, res) => {

    res.json("report");
})

//------------------------------------------------ 01

router.post('/set_01_CPIU', async(req, res) => {
    console.log("-------- set_01_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_02_CPIU', async(req, res) => {
    console.log("-------- set_02_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_03_CPIU', async(req, res) => {
    console.log("-------- set_03_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_04_CPIU', async(req, res) => {
    console.log("-------- set_04_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

 

    
    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","AA","BB"],"list02": ["","AA","BB"],"list03": ["","AA","BB"]}}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_01_1call_CPIU', async(req, res) => {
    console.log("-------- set_01_1call_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_02_1call_CPIU', async(req, res) => {
    console.log("-------- set_02_1call_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>



    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_03_1call_CPIU', async(req, res) => {
    console.log("-------- set_03_1call_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    // console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/set_04_1call_CPIU', async(req, res) => {
    console.log("-------- set_04_1call_CPIU --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

 

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    // console.log(output_data);
    res.json(output)
});


module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





