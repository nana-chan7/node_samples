// 2023-10-04 3.week3

// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')

// dotenvの設定の読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

// サーバ作成
const app = express()

// GETリクエストの処理
app.get('/', (req, res) =>{
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)
    
    // レスポンスの処理
    res.send('Hello!!!!!')

})