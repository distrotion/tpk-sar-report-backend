const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow007', async (req, res) => {

    res.json("report");
})

//------------------------------------------------ 04

router.post('/report_list', async(req, res) => {
    console.log("-------- report_list --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

    let output_data = [{
        PO: "A00000001",
        CP: "00000001",
        data01: "f1234567890",
        data02: "f1",
        data03: "TPK-SAR-STD",
        data04: "f1",

    },
    ];

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    console.log(output_data);
    res.json(output)
});



router.post('/report_setup_list', async(req, res) => {
    console.log("-------- report_list --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        NO: "1",
        CP: "00000001",
        Customer: "f1",
        Materail: "f1",
        Branch: "RAYONG",
        ReportType: "TPK-SAR-Condition01",
    },
    ];

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];
    res.json(output)
});

router.post('/report_setup_edit', async(req, res) => {
    console.log("-------- report_list --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

router.post('/report_setup_new', async(req, res) => {
    console.log("-------- report_list --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});

router.post('/report_setup_delete', async(req, res) => {
    console.log("-------- report_list --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>


    
    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
});




module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





