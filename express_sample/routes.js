// 2023-10-11 3.week4
// 2023-10-18 3.week5
// 2023-10-25 3.week6

// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()
// models/item.js を読み込み
const item = require('./models/item')

// HomeControllerモジュールを読み込み
const HomeController = require('./controllers/HomeController')
// ItemControllerモジュールを読み込み
const HomeController = require('./controllers/ItemController')

// GETリクエストの処理
// Home
router.get('/', HomeController.index)
router.get('/profile', HomeController.index)
// Item
router.get('/item', ItemController.index)
router.get('/item/:id', ItemController.detail)

// ☆ router はControllerへ

// POSTリクエスト 裏でログイン名とパスワードを送信する
router.post('/auth', (req, res) =>{
    var loginName = req.body.login_name
    var password = req.body.password
    console.log(loginName, password)

    var message = "ログイン失敗"
    // .env で設定した値で、ログインチェック
    // TODO: データベースに接続してユーザ取得
    // TODO: パスワードはハッシュ値でチェック
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD){
            message = "ログイン成功"
        // TODO: ログインが成功したらユーザの状態を保存
        // TODO: ログイン後のページへ転送
    } else{
        // TODO: ログイン画面に戻す
    }
    res.send(message)
})

// // モジュール化
module.exports = router

