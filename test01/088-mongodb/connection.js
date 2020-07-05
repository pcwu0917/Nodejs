const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/test";
const connection=MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});
const database="";
connection.then((connection)=>{
    let database = connection.db("test");
    console.log(database)
    connection.close();
});

// //创建数据库
// MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},function (err,mongoClient) {
//     if(err) throw err;
//     console.log("数据库已创建！");
//     mongoClient.close();
// });
//
// //创建集合
// MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
//     if (err) throw err;
//     console.log("数据库已创建");
//     let database = db.db("test");
//     database.createCollection('problem', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合成功");
//         db.close()
//     })
// });


