// 2023-11-15 3.week8

const User = require('../models/Users')

var user = new User();
var data = { 
        name: "Node", 
        email: "node@test.com",
        password: "password",
    }
// var data = {
//     name: "Node",
//     email: "node@test.com",
//     password: "password",
// }

var result = user.add(data);
console.log(result)

// Terminal: node test/insert