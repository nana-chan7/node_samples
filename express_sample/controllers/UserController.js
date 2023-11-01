// 2023-11-01 3.week7

// トップページ
exports.index = (req, res) => {
    // ユーザのセッションを取得
    const user = req.session.authUser

    // ログインユーザがいれば、
    if (user) {
        // views/user/index.ejsを表示
        res.render('user/index')
    }else{
        // ログインユーザがいなければ、ログインページにリダイレクト
        res.redirect('/login')
    }
}


