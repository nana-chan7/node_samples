// 2023-11-01 3.week7

// Modelモジュールを読み込み
const Model = require('./Model')

//Modelクラスを継承
class User extends Model { // Modelクラス: スーパークラス
    dataFile = "./data/users.json" // ※メインプログラムからの相対パス
}

// モジュール化 
module.exports = User