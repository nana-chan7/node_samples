// 2023-11-15 3.week8

// Userモデル
const User = require('../models/User')

exports.index = (req, res) => {
    res.render('regist/index')
}

exports.add = async (req, res) => {
    // TODO: validate

    // DB登録
    var user = new User();
    await user.add(req.body)

    if (user.id) {
        res.redirect('/login')
    } else {
        res.render('/regist')
    }
}