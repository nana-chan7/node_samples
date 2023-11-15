// 2023-11-01 3.week7

// Modelモジュールを読み込み
const Model = require('./Model')

//Modelクラスを継承
class User extends Model { // Modelクラス: スーパークラス
    dataFile = "./data/users.json" // ※メインプログラムからの相対パス

    // ↓ 単体テストで使われる？
    /**
     * 認証用のメソッド
     * @param {*} email 
     * @param {*} password 
     * @return array
     */
    auth = (email, password) => {
        // email と password が一致したらユーザを返す
        // TODO: データベースに接続してユーザ取得
        // TODO: パスワードはハッシュ値でチェック
        return this.get().find((value) => 
            (value.email == email && value.password == password))
    }
}

// モジュール化 
module.exports = User

// 単体テスト = Unit Test