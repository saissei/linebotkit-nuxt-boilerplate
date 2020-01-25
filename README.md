# linebot-boilerplate-nux

> My impressive Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Endpoint

-   api

MessagingAPI: `/webhook/message`

-   対応メッセージ
    -   **test** -> Hello メッセージを返却します。

## メッセージの追加方法

### 1. 判定メッセージの追加

`/api/interactor/SenarioHandler.ts` 内の `typeMessage` 関数 switch に対応する受信メッセージを定義してください。

### 2. 返信メッセージを定義

`/api/valueobject/message/VOReplyMessage.ts` に以下の関数を追加してください。

```
public static hogehoge(): VOReplyMessage {
  const message: TextMessage = {
    type: 'text',
    text: 'Hello!'
  };
  return new VOReplyMessage(message);
}

---
1. 変数 "message" に送信するメッセージを定義してください。
2. 関数名は自由に設定してください。ただしenarioHandler.tsより呼び出すのでわかりやすい名前にしましょう。
```

### 3. メッセージ送信関数の追加定義

**1. 判定メッセージの追加** で追加した定義内で、 **2. 返信メッセージを定義** で定義した関数を呼び出して下さい。

## LIFF の追加

`/client/pages` 配下に `.vue` ファイルを追加してください。（ファイル名が自動的に endpoint になります。)
