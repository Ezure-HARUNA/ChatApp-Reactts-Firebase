<!-- セットアップ方法をREADMEに記述する -->

# Name（リポジトリ/プロジェクト/OSS などの名前）

チャットアプリ(React.ts)

# DEMO

[デモ](https://chatapp-reactts.web.app/)

# Features

## ログイン

- Google ログインか mail・password によるログインで利用可能
  (テストユーザーとしては、mail: usera@gmail.com,
  password: test00 でログイン・利用可能)

## メッセージ

- 画像を添付したメッセージの送信が可能(画像なしでも可)

## レスポンス

メッセージ下の吹き出しアイコンをクリックすると、
メッセージに返信することが可能

## ログアウト

- メッセージ入力欄横のアイコンをクリックすることでログアウトが可能

# Requirement

- @material-ui/core: ^4.11.3
- @material-ui/icons: ^4.11.2
- @reduxjs/toolkit: ^1.5.1
- firebase: ^8.4.1
- react: ^17.0.2,
- react-redux : ^7.2.0
- typescript: ~4.1.5

# Installation

```
npx create-react-app . --template redux-typescript
yarn add @material-ui/core @material-ui/icons
yarn add firebase

```

# Usage

```bash
git clone https://github.com/Ezure-HARUNA/ChatApp-Reactts-Firebase.git
cd ChatApp-Reactts-Firebase
yarn start
```

# Author

作成情報を列挙する

- 作成者: Haruna Ezure
- 所属:
- E-mail: burimofumofu@gmail.com

# License

[MIT license](https://en.wikipedia.org/wiki/MIT_License).
