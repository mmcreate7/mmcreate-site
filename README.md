# こまりごとラボ（旧 MMCreate）公式サイト

1ページの静的サイト（HTML/CSSのみ、ビルド不要）。

- ソース：GitHub `mmcreate7/mmcreate-site`
- 公開：Cloudflare Pages（mmcreate7@gmail.com のアカウント、プロジェクト `komarigoto-lab`）。`main` に push すると自動デプロイ
- 本番URL：https://komarigoto-lab.pages.dev/
- 旧URL https://mmcreate-site.vercel.app/ は `vercel.json` で新URLへ転送するだけにしている（Vercel Hobby は商用利用不可のため 2026-11-13 に移転）
- 商品・価格を変えたら `index.html` の該当箇所を直して push する

## アクセス解析（2026-11-13 Cloudflare Web Analytics に移行）
- 無料。見る場所：Cloudflare ダッシュボード → Analytics → Web analytics → komarigoto-lab.pages.dev（日別の訪問・ページビュー、ページ別、流入元、国、端末）
- 計測コードは各ページの `</head>` 直前。新しいページを作ったら同じコードを入れる
- 自分の閲覧は数えない：各ブラウザで一度だけ `https://komarigoto-lab.pages.dev/?mmc-internal=1` を開く（`?mmc-internal=0` で解除）。内蔵ブラウザは設定済み
- 11/13 に Vercel 側で数えた分は、Vercel のダッシュボード（mmcreate-site → Analytics）に残っている
