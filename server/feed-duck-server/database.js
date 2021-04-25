const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b7aeh.mongodb.net/ducks?retryWrites=true&w=majority`

let _db;

const mongoConnect = callback => {
    MongoClient.connect(url)
    .then(client => {
        console.log('connected');
        _db = client.db();
        callback();
    })
    .catch(err => {
    console.log(err);
    throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;