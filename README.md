# こまりごとラボ（旧 MMCreate）公式サイト

1ページの静的サイト（HTML/CSSのみ、ビルド不要）。

- ソース：GitHub `mmcreate7/mmcreate-site`
- 公開：Cloudflare Pages（mmcreate7@gmail.com のアカウント、プロジェクト `komarigoto-lab`）。`main` に push すると自動デプロイ
- 本番URL：https://komarigoto-lab.pages.dev/
- 旧URL https://mmcreate-site.vercel.app/ は `vercel.json` で新URLへ転送するだけにしている（Vercel Hobby は商用利用不可のため 2026-11-13 に移転）
- 商品・価格を変えたら `index.html` の該当箇所を直して push する
- ツールは `tools/<名前>/index.html`。新しいツールは `assets/tool.css`（共通デザイン）と `assets/analytics.js`（計測）を読み込み、トップの一覧・関連ツール・`sitemap.xml` にも追加する
- 公開中のツール：電卓（calculator）、割り勘計算（warikan）、日数計算（days）、年齢・和暦早見表（age）、育休給付金の計算（ikukyu）、時給・月給・年収の換算（salary）、ポイント還元込みの比較（point）、文字数カウント（moji）、音声文字起こし（mojiokoshi）、やる気スイッチ診断（yaruki）、Ameba Owndの引っ越しツール（ownd-hikkoshi）、家事按分の計算（kaji-anbun）
- 公開中のアプリ（トップの「アプリ」セクション `#apps`）：こそだてノート（https://kosodate-note.pages.dev/ ・無料テスト版。アイコンは `assets/apps/kosodate-note.png`）。アプリ本体は別リポジトリ `mmcreate7/kosodate-note`。正式版（iOS）が出たら、この欄の説明とボタンを差し替える
- 新しいアプリを載せるときは、`#apps` に `.app` のブロックを1つ追加し、アイコン（192px程度）を `assets/apps/` に置く
- 育休給付金の上限額・下限額は毎年8月1日に変わる。厚労省「基本手当日額等の適用について」を確認し、`tools/ikukyu/index.html` の DAILY_MAX・DAILY_MIN と本文・出典の日付を更新する（次回 2027年8月）

## 困りごと募集フォーム（2026-11-16 追加）
- ページ：`request/index.html`（https://komarigoto-lab.pages.dev/request/）。トップのナビ・ツール一覧の下・お問い合わせ欄からリンク
- 方針：いただいた困りごとは **基本的に無料のツールにして本サイトで公開する**。費用なし・売り込みなし、紹介は個人がわからない形で
- 仕組み：サーバーなし。送信ボタンでメールアプリが開き、mmcreate7@gmail.com 宛てに件名「【困りごと】…」で届く。届いた声は voice-research の悩み台帳に入れる
- 受信数を増やしたくなったら、Googleフォーム等の受付サービスに切り替える（オーナー承認が必要）
- （ブランチ feature/request-form・未公開）Formspree で「ページ内で送信完了」にする下書き。`<form id="f" action="FORM_ENDPOINT_HERE">` を Formspree のフォームURL（`https://formspree.io/f/…`）に書き換えると切り替わる。書き換えるまでは従来どおりメールアプリで送る。メールで送る方法は予備として残す。迷惑送信よけに隠し欄 `_gotcha` を入れてある

## アクセス解析（2026-11-13 Cloudflare Web Analytics に移行）
- 無料。見る場所：Cloudflare ダッシュボード → Analytics → Web analytics → komarigoto-lab.pages.dev（日別の訪問・ページビュー、ページ別、流入元、国、端末）
- 計測コードは各ページの `</head>` 直前。新しいページを作ったら同じコードを入れる
- 自分の閲覧は数えない：各ブラウザで一度だけ `https://komarigoto-lab.pages.dev/?mmc-internal=1` を開く（`?mmc-internal=0` で解除）。内蔵ブラウザは設定済み
- 11/13 に Vercel 側で数えた分は、Vercel のダッシュボード（mmcreate-site → Analytics）に残っている
