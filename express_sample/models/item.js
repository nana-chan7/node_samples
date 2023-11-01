// 2023-11-01 3.week7

// Modelモジュールを読み込み
const Model = require('./Model')

//Modelクラスを継承
class Item extends Model { // Modelクラス: スーパークラス
    dataFile = "./data/items.json" // ※メインプログラムからの相対パス
}

// モジュール化 
// ※モジュール化することで、関数名に色が付く ← Itemクラスが使えるようになる
module.exports = Item