// 2023-10-25 3.week6
// 2023-11-01 3.week7

const User = require('../models/Users')
// 入力画面 (TOP)
exports.index = (req, res) => {
    // views/login/index.ejsを表示
    res.render('login/index')
}

// ログイン処理
// POSTリクエスト 裏でログイン名とパスワードを送信する
exports.auth = (req, res) =>{
    // POSTデータの受け取り
    var email = req.body.login_name
    var password = req.body.password

    // ユーザ認証
    const user = new User()
    const authUser = user.auth(email, password)

    if (authUser) {
        // 認証ユーザがいれば、ユーザをセッションに保存
        req.session.authUser = authUser
        
        // ユーザホームにリダイレクト
        res.redirect('/user')
    }else {
        // 認証が失敗したら、ログインページにリダイレクト
        res.redirect('/login')
    }

    // var loginName = req.body.login_name
    // var password = req.body.password
    // console.log(loginName, password)

    // var message = "ログイン失敗"
    // .env で設定した値で、ログインチェック
    // TODO: データベースに接続してユーザ取得
    // TODO: パスワードはハッシュ値でチェック
    // if (loginName == process.env.LOGIN_NAME
    //     && password == process.env.PASSWORD){
    //         message = "ログイン成功"
        // TODO: ログインが成功したらユーザの状態を保存
        // TODO: ログイン後のページへ転送
    // } else{
    //     // TODO: ログイン画面に戻す
    // }
    // res.send(message)
}
