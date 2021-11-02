const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow001', async (req, res) => {

    res.json("report");
})

//------------------------------------------------ 01

router.post('/customer_query', async(req, res) => {
    console.log("-------- customer_query --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

    let output_data = [{
        CP: "00000001",
        NAME: "Toyota",
        PROCESS01: "AA",
        PROCESS02: "AA",
        PROCESS03: "AA",
        PROCESS04: "AA",
        PROCESS05: "AA",
        PROCESS06: "AA",
        PROCESS07: "AA",
        PROCESS08: "AA",
        PROCESS09: "AA",
        PROCESS10: "AA",
        PROCESS11: "AA",
        PROCESS12: "AA",
        PROCESS13: "AA",
        PROCESS14: "AA",
        PROCESS15: "AA",
    },
    ];

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/process_query', async(req, res) => {
    console.log("-------- process_query --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

    let output_data = [{
        NO: "1",
        PROCESS: "test",
        ITEM01: "AA",
        ITEM02: "AA",
        ITEM03: "AA",
        ITEM04: "AA",
        ITEM05: "AA",
        ITEM06: "AA",
        ITEM07: "AA",
        ITEM08: "AA",
        ITEM09: "AA",
        ITEM10: "AA",
        ITEM11: "AA",
        ITEM12: "AA",
        ITEM13: "AA",
        ITEM14: "AA",
        ITEM15: "AA",
    },
    ];

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/item_query', async(req, res) => {
    console.log("-------- item_query --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

    let output_data = [{
        NO: "1",
        ITEM: "Toyota",
        RANGE: "AA",
        UNIT: "AA",
    },
    ];

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    console.log(output_data);
    res.json(output)
});

//------------------------------------------------ 01

router.post('/unit_query', async(req, res) => {
    console.log("-------- unit_query --------");
    console.log(req.body);
    // input = req.body
    //------------------------>>>

    let output_data = [{
        NO: "1",
        UNIT:"AA"
    },
    ];

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data}];

    console.log(output_data);
    res.json(output)
});




module.exports = router;

//output = [{ "list01": [],"list02": [],"list03": []}];





