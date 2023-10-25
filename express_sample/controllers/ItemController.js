// 2023-10-25 3.week6

// modules/item.jsを読み込み
const item = require('../models/item')

/**
 * 商品一覧
 */
exports.index = (req, res) => {
    var data = {
        title: '商品一覧',
        items: item.get(),
    }
    // views/item/index.ejsにデータを渡して表示
    res.render('item/index', data)
}

// 商品詳細
// /item/xxx のルーティング(パスパラメータ)
exports.index = (req, res) => {
    const id = req.params.id 
    // TODO: case1> RDBMSを利用する
    // TODO: case2> APIサーバを利用する
    // itemモデルを使って、IDで商品データを取得
    var selectItem = item.find(id)
    // res.send(selectItem.name)
    var data = {
        title: '商品詳細',
        item: selectItem,
    }
    // views/item/detail.ejsにデータを渡して表示
    res.render('item/detail', data)
}

