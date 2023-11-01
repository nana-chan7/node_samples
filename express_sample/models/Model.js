// 2023-11-01 3.week7

// fsモジュールを読み込み
const fs = require('fs')

class Model {
    dataFile = ""

    /**
     * すべてのデータを取得するメソッド
     * @returns array
     */
    get = () => {
        // 外部ファイルの読み込み
        var json = fs.readFileSync(this.dataFile)
        // JSONデータをパース(オブジェクトに変換)
        var values = JSON.parse(json)
        return values
    }

    // IDを指定してデータを取得するメソッド
    find = (id) => {
        var values = this.get()
        // データを繰り返して、idが一致したら返す
        return values.find((value) => value.id == id)
    } 
}

// モジュール化
module.exports = User