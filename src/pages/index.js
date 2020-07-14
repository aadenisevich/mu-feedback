import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import ImageEmojiHappiness from "../components/image-emoji-happiness"
import Button from "../components/button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        width: "100%",
        marginBottom: `1.45rem`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 150, height: 150 }}>
        <ImageEmojiHappiness />
      </div>
    </div>
    <h1 style={{ textAlign: "center" }}>
      Расскажите, Вам понравилось обслуживание в MelanomaUnit?
    </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => {
          navigate("/good")
        }}
        color="rgb(74, 191, 64)"
      >
        Да, всё здорово!
      </Button>
      <Button
        onClick={() => {
          navigate("/bad")
        }}
        color="rgb(179, 81, 77)"
      >
        Нет, есть претензии
      </Button>
    </div>
  </Layout>
)

export default IndexPage
