module.exports = {
  //これを設定しているとこれよりも親フォルダを探しに行かなくなる
  root: true,
  env: {
    //console.logなどをしてもエラーが出なくなる
    browser: true,
    // ES20までの構文を使用してもエラーが出なくなる
    es2020: true,
    node: true,
  },
  parserOptions: {
    //importやexportなど使ってもエラーが出なくなる
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    //更新をしない変数にconst以外が使われていたらエラーが出るように
    'prefer-const': 'error',
  },
};
