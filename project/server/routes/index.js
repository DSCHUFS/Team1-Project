var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
    res.send({greeting:'hello react'});
});

router.get('/query', function(req,res) {
    const name = req.body.name;
    console.log(name);
})

module.exports = router;