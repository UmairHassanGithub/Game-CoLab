//info for connect to the mysql database
//currently hosted on clearDB.com
const mysql = require("mysql");

var config = {
    connectionLimit: 100,
    host: "us-cdbr-east-03.cleardb.com",
    user: "b1376f4ac96cee",
    password: "de4c175e",
    database: "heroku_3001774d8bc5909"
};

var pool = mysql.createPool(config);


module.exports = pool;
