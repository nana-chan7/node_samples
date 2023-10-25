// モジュール化
// Top Page
exports.index = (req, res) =>{
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンスの処理
    // res.send('Hello!!!')
    // テンプレート表示(レンダリング)
    // views/index.ejsを表示
    res.render('index')
}

// Profile Page
exports.profile = (req, res) =>{
    // res.send('プロフィール')
    var user = {
        id: 1,
        name: 'YSE',
        birthplace: '横浜',
        hobby: ['旅行', 'グルメ', 'スポーツ'],
    }
    var data = {
        title: 'プロフィール',
        user: user,
    }
    // views/profile.ejsに dataを渡して表示
    res.render('profile', data)
    
    }
    