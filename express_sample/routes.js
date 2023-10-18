// 2023-10-11 3.week4
// 2023-10-18 3.week5

// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()

// GETリクエストの処理
router.get('/', (req, res) =>{
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンスの処理
    res.send('Hello!!!')
})

router.get('/profile', (req, res) =>{
    res.send('プロフィール')
})

// /item/xxx のルーティング(パスパラメータ)
router.get('/item/:id', (req, res) => {
    const id = req.params.id 

    res.send(id)
})

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

