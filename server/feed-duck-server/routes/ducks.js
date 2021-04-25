var express = require('express');
const Ducks = require('../model/ducks');
var router = express.Router();

/* GET users listing. */
router.post('/save', (req, res, next) => {
 const time = req.body.time;
 const food = req.body.food;
 const location = req.body.location;
 const count = req.body.count;
 const foodQuantity = req.body.foodQuantity

 const ducks = new Ducks(time,food,location,count,foodQuantity);
ducks.save().then(result => {
    console.log(' Entry added');
    res.send({'status' : 'S'});
}).catch(err => {
    console.log(err);
})
});

router.get('/',(req,res,next) => {
    Ducks.fetchAll()
    .then(products => {
        res.send(products);
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;
