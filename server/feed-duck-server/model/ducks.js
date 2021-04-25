const getDb = require('../database').getDb;


class Ducks{
    constructor(time,food,location,count,foodQuality){
        this.time = time;
        this.food = food;
        this.location = location;
        this.count = count;
        this.foodQuality = foodQuality;
    }

    save(){
        const db = getDb();
       return db.collection('ducks').insertOne(this)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('ducks')
        .find()
        .toArray()
        .then(products =>{
            console.log(products);
            return products;
        })
        .catch(err => console .log(err));
    }
}

module.exports = Ducks;