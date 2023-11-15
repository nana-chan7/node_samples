// 2023-10-11 3.week4
// 2023-10-18 3.week5
// 2023-10-25 3.week6
// 2023-11-15 3.week8


// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()

// HomeControllerモジュールを読み込み
const HomeController = require('./controllers/HomeController')
// ItemControllerモジュールを読み込み
const ItemController = require('./controllers/ItemController')
// LoginControllerモジュールを読み込み
const LoginController = require('./controllers/LoginController')
// UserControllerモジュールを読み込み
const UserController = require('./controllers/UserController')

// GETリクエストの処理

// Regist
router.get('/regist', RegistController.index)
router.get('/regist/add', RegistController.add)

// Home
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// Item
router.get('/item', ItemController.index)
router.get('/item/:id', ItemController.detail)

// Login
router.get('/login', LoginController.index)
router.post('/auth', LoginController.auth)

// User
router.get('/user', UserController.index)
router.get('/user/logout', UserController.logout)

// ☆ router はControllerへ

// // モジュール化
module.exports = router

