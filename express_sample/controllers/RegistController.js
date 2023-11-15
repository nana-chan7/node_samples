// 2023-11-15 3.week8

// Userモデル
const User = require('../models/Users')

exports.index = (req, res) => {
    res.render('regist/index')
}

exports.add = async (req, res) => {
    // TODO: validate

    // DB登録
    var user = new User();
    var newUser = await user.add(req.body)

    // TODO: bug
    if (newUser.id) {
        res.redirect('/login')
    } else {
        res.render('/regist')
    }
}