var express = require('express');
var router = express.Router();

var people=[
    {fn :'Mirek', ln: 'W11'},
    {fn :'Alicja', ln: 'W12'},
];
/* GET /api/people */
router.get('/people', function(req, res, next) {
    res.json(people);
});
/*POST /api/add */
router.post('/add', function(req, res, next) {
    console.log(req.body);
    var data=req.body;
    people.push(data);
    res.sendStatus(204);
});

module.exports = router;
