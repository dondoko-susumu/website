import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="どんどこすすむのホームページ" />
    <h1>やぁ, みんな</h1>
    <p>どんどこすすむのホームページへようこそ。</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      <a href={"https://twitter.com/dondoko_susumu"} target="blank">どんどこすすむのツイッター</a>
    </p>
    <p>
      <a href={"https://www.instagram.com/dondoko_susumu/"} target="blank">どんどこすすむのインスタグラム</a>
    </p>
    <p>
      <a href={"https://dondoko.hateblo.jp"} target="blank">どんどこすすむの日記</a>
    </p>
    <p>
      <a href={"https://dondoko-susumu.hatenadiary.org"} target="blank">どんどこすすむの絵日記</a>
    </p>
    <p>
      <a href={"https://peing.net/ja/dondoko_susumu?event=0"} target="blank">どんどこすすむの質問箱</a>
    </p>
    <p>
      <a href={"https://www.facebook.com/dondoko.susumu"} target="blank">どんどこすすむのフィイスブック</a>
    </p>
    <p>
      <a href={"https://qiita.com/dondoko-susumu"} target="blank">どんどこすすむのキータ</a>
    </p>
    <p>
      <a href={"https://github.com/dondoko-susumu/"} target="blank">どんどこすすむのギットハブ</a>
    </p>
    <p>
      <a href={"https://bookmeter.com/users/92437"} target="blank">どんどこすすむの読書メーター</a>
    </p>
    <p>
      <a href={"https://note.com/dondoko_susumu"} target="blank">どんどこすすむのノート</a>
    </p>
    <p>
      <a href={"https://b.hatena.ne.jp/dondoko_susumu/"} target="blank">どんどこすすむのブックマーク</a>
    </p>
    <p>
      <a href={"https://scrapbox.io/dondoko-susumu/"} target="blank">どんどこすすむのメモ</a>
    </p>
    <p>
      <a href={"https://speakerdeck.com/dondoko_susumu"} target="blank">どんどこすすむのスピーカーデック</a>
    </p>
    <p>
      <a href={"https://medium.com/@dondoko_susumu"} target="blank">どんどこすすむのミディウム</a>
    </p>
    <p>
      <a href={"https://dondokosusumu.tumblr.com/"} target="blank">どんどこすすむのたんぶらー</a>
    </p>
  </Layout>
)

export default IndexPage
