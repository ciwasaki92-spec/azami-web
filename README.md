# azami web(岩崎ちか ポートフォリオサイト)

公開URL:https://azami-web.jp/

## フォルダ構成
```
index.html        … 1ページ構成(FV/自己紹介/できること/実績/制作の流れ/料金/お問い合わせ)
css/style.css     … 見た目(トークン→共通→各セクション)
js/main.js        … スマホのメニュー開閉
images/           … profile.jpg(顔写真・差し替え予定)、実績のサムネイル
```

## 差し替えが必要なもの
- images/profile.jpg … 顔写真(正方形600×600px程度)。差し替えたら index.html の自己紹介にある「顔写真ができたら」のコメントに従って img の行を有効にする
- images/ogp.jpg … SNSでシェアされたときの画像(1200×630px)。作成済み。キャッチコピーを変えたら作り直す

## デザイン
- 白ベース+ミント/ピンク/ラベンダーのグラデーション(飾りのみ)
- 英字:Josefin Sans、日本語:Zen Maru Gothic

## 実績(作品)を増やすとき
1. works/hidamari.html をコピーして、works/新しい名前.html を作る(中身を書き換える)
2. index.html の「実績」にある <li class="work-card"> 〜 </li> をコピーして、
   リンク先(href)・画像・ラベル・タイトル・説明文を書き換える
3. 画像は images/ に入れる(サムネイルは横長 16:10 がきれいに収まる)
- ひだまりLPのバージョン違いは、works/hidamari.html の
  「バージョン違い…ここに同じ形の section を足す」の場所に追加する
