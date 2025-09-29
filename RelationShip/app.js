const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

(async () => {
  
  let database;
  database = (await MongoClient.connect("mongodb://127.0.0.1:27017")).then(
    (client) => {
      database = client.db("shop");
      if (!database) {
        console.log("Database not connected");
      } else {
        console.log("Database connected");
      }
      return database;
    }
  );

   const orders = await database.collection('orders').aggregate([
    {
        $lookup:{
             from: 'products',
             localField: 'products_id',
             foreignField: '_id',
             as: 'products'
        }
    }
   ]).toArray()

   console.log(orders)

})();
