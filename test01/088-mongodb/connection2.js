const mongoose=require("mongoose");
const path=require("path");
const fs=require("fs");
const options = {
    db_host: "127.0.0.1",
    db_port: 27017,
    db_name: "test",//数据库名称
    useNewUrlParser: true
};
const dbURL = "mongodb://" + options.db_host + ":" + options.db_port + "/" + options.db_name;
mongoose.connect(dbURL,{useNewUrlParser: true,useUnifiedTopology: true});// 连接数据库
let dbHandle = mongoose.connection;
//通过 数据库连接句柄，监听mongoose数据库成功的事件
dbHandle.on('open', function (err) {
    if (err) {
        console.log('数据库连接失败');
        throw err;
    }
    console.log('数据库连接成功')
})

let MongoDbAction = {}
let filename = path.join(path.dirname(__dirname), 'resources/table.json');
let tabConf = JSON.parse(fs.readFileSync(path.normalize(filename)));

MongoDbAction.getConnection = function (table_name) {
    //定义表数据结构
    var userModel = new mongoose.Schema(tabConf[table_name], {
        versionKey: false //去除： - -v
    })
    var client = mongoose.model(table_name, userModel, table_name);
    return client;
};
/**
 * 插入单条数据
 * @param table_name 表名
 * @param insertData 插入的数据
 * @param callback 回调方法
 */
MongoDbAction.insertData= function (table_name, insertData , callback) {
    var node_model = this.getConnection(table_name);
    node_model.insertOne(insertData , function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

MongoDbAction.findOne = function (table_name, conditions, callback) {
    var node_model = this.getConnection(table_name);
    node_model.findOne(conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

MongoDbAction.findOne("User",(res)=>{console.log("查询成功"+res)})