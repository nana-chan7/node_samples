// 2023-10-04 3.week3
// 2023-10-11 3.week4
// 2023-10-18 3.week5
// 2023-10-25 3.week6
// 2023-11-01 3.week7

// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')
// routerモジュール読み込み
const routes = require('./routes')


// dotenvの設定の読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

// console.log(HOST)
// console.log(PORT)

// サーバ作成
const app = express()

// ミドルウェアの設定 3.week4
// publicフォルダを静的コンテンツのフォルダに指定 webに公開されている場所 → public
app.use(express.static(__dirname + '/public'));

// URLエンコード
app.use(express.urlencoded({extended:true}))

// express-ejs-layoutsモジュールを読み込み
const layouts = require('express-ejs-layouts')
// EJSをテンプレートエンジンとして設定(ルーティングの上に記述 ※科基準大事！)
app.set('view engine', 'ejs')
// views/layouts/default.ejsをレイアウトとして利用
app.set('layout', 'layouts/default')
// ミドルウェアとして利用
app.use(layouts)

// Express Sessionのミドルウェア追加
const session = require('express-session')
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitalized: false,
}))

// ルーティングを有効
app.use(routes)

// ※ サーバー停止: 起動中のターミナルで Ctrl + C
// サーバ待機 (Listen)
app.listen(PORT, HOST, () =>{
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})

