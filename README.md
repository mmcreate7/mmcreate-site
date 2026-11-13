# こまりごとラボ（旧 MMCreate）公式サイト

1ページの静的サイト（HTML/CSSのみ、ビルド不要）。

- ソース：GitHub `mmcreate7/mmcreate-site`
- 公開：Vercel（mmcreate アカウント）。`main` に push すると自動デプロイ
- 商品・価格を変えたら `index.html` の該当箇所を直して push する

## アクセス解析（2026-11-13 有効化）
- Vercel Web Analytics（Hobby の無料枠：月5万イベント・過去30日分を表示。超えても課金なし・計測が止まるだけ）
- 見る場所：https://vercel.com/mmcreate/mmcreate-site/analytics （日別の訪問者・ページビュー、ページ別、流入元、国、端末）
- 計測コードは各ページの `</head>` 直前。新しいページを作ったら同じコードを入れる
- 自分の閲覧は数えない：各ブラウザで一度だけ `https://mmcreate-site.vercel.app/?mmc-internal=1` を開く（`?mmc-internal=0` で解除）。内蔵ブラウザは設定済み
