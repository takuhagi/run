# README

## アプリケーション名
Run!

## 概要(このアプリでできること)

ランニングの記録の投稿（文字、記録、写真）
ユーザー同士のチャットを使用したコミュニケーション
ユーザーグループの作成

## 本番環境(デプロイ先 テストアカウント＆ID)
## 🌐 App URL

### **http://54.168.214.241/**  

テストアカウント
Eメール：test@run.com
パスワード：１２３４５６７８

##  制作背景
「うつ病などの精神病や生活習慣病防止の為のランニング習慣化と孤独解消アプリ」
→ランニングのチームを作ること、記録を投稿することによる継続力の増加。

母、兄共に精神病を持ったことが原体験で「脳と心」に関係する社会課題解決がしたい。

特にうつ病は日本の大きな社会問題なので少しでも解決の一助となりたい。

うつ病社会問題についての参考リンクページ
https://next.rikunabi.com/tech/docs/ct_s03600.jsp?p=000307

## DEMO動画
**https://i.gyazo.com/6d0cdad415c8103976ff49d99e54bea2.mp4**

## 工夫したポイント
新規登録機能
グループ内でのチャット機能
複数人によるグループチャット機能
チャット相手の検索機能
チャットグループへのユーザー招待機能
チャットの履歴表示機能
画像送信機能
チャットの自動更新
インクリメンタルサーチ
ビューに明るい彩色を採用
こちらのサイトを参考にして「ビタミン色」を取り入れました。
https://ai-create.net/magazine/2017/10/23/colorpatterns/

##  使用技術(開発環境)
Haml/Scss
Ruby/Ruby on Rails
Javascript
jQuery
MySQL
GitHub
AWS(EC2,S3)
Visual Studio Code

## 課題（現在作成 / 修正中）
投稿機能の一覧表示にすぐ移動できるようにする
RSpecでの単体テスト
細かなビューの修正（読みやすいようにフォントサイズ、色を修正）
エラーの解消
投稿ページへのバリデーション

## 今後実装したい機能（現在作成 / 修正中）
ユーザーごとの投稿ページの充実
ユーザー間のフォロー機能
画像を複数枚投稿できるようにする

## 将来はこういうサイトを作りたいです。
「うつ病の人にWEBで認知行動療法を提供する」
https://u2plus.jp/pages/6-message




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users-groups
- has_many :groups, through:users-groups
  

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
  


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|unique:true|
### Association
- has_many :users
- has_many :messages
- has_many :users, thorough:users-groups
  
  

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


<!-- ## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :tweets
- has_many :comments -->

## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :tweet
- belongs_to :user
