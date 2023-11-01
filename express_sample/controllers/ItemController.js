// 2023-10-25 3.week6

// modules/Item.jsを読み込み
const Item = require('../models/Item')

/**
 * 商品一覧
 */
exports.index = (req, res) => {
    // Itemインスタンスを生成
    const item = new Item()

    var data = {
        title: '商品一覧',
        // 商品をすべて取得
        items: item.get(),
    }
    // views/item/index.ejsにデータを渡して表示
    res.render('item/index', data)
}

/**
 * 商品詳細
 */
// /item/xxx のルーティング(パスパラメータ)
exports.detail = (req, res) => {
    const id = req.params.id 
    // Itemインスタンスを生成
    const item = new Item()

    var selectItem = item.find(id)
    // res.send(selectItem.name)
    var data = {
        title: '商品詳細',
        item: selectItem,
    }
    // views/item/detail.ejsにデータを渡して表示
    res.render('item/detail', data)

    // TODO: case1> RDBMSを利用する
    // TODO: case2> APIサーバを利用する
    // itemモデルを使って、IDで商品データを取得
}
