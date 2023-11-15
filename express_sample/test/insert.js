// 2023-11-15 3.week8

// Terminal: npm i bcrypt

const User = require('../models/User')
// bcryptモジュール
const bcrypt = require('bcrypt')

// パスワードをハッシュ化
var hash = bcrypt.hashSync("password", 10);

var user = new User();
var data = { 
        name: "Node", 
        email: "node@test.com",
        password: hash,
    }
// var data = {
//     name: "Node",
//     email: "node@test.com",
//     password: "password",
// }

var result = user.add(data);
console.log(result)

// Terminal: node test/insert