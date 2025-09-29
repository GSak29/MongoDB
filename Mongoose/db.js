// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const mongoose = require('mongoose')

let database;

async function getDatabase(){
    mongoose.connect('mongodb+srv://GSadmin:GSadmin@cluster0.ye5jqba.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=> {
        console.log('Database Connected!')
    }).catch(()=>{
        console.log('Database Not Connected!')
    })

}

module.exports = {
    getDatabase,
}