// 2023-11-01 3.week7

// Modelモジュールを読み込み
const Model = require('./Model')

//Modelクラスを継承
class Item extends Model {
    dataFile = "./data/items.json" // ※メインプログラムからの相対パス
}