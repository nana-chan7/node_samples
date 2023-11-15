// 2023-11-15 3.week8

// mysql2モジュールを読み込み
const mysql = require('mysql2')
// dbモジュールを読み込み
const db = require('../lib/db') // ※相対パス

// dbモジュールの infoを代入して MySQL接続の作成
const con = mysql.createConnection(db.info);
// MySQL接続
con.connect((error) => {
    if (error){
        console.log('DB connect error...')
    }else {
        console.log('DB connect success!')
    }
});
// MySQL接続終了
con.end();

// Terminal: node test/connect