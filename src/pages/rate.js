import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import ImageEmojiHappiness from "../components/image-emoji-happiness"
import Button from "../components/button"
import SEO from "../components/seo"

const RatePage = ({ location: { state } }) => {
  useEffect(() => {
    if (!state || !state.fio || !state.number) {
      navigate("/")
    }
  }, [])
  return (
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
      <h2 style={{ textAlign: "center" }}>
        {state?.fio}, расскажите, Вам понравилось обслуживание в MelanomaUnit?
      </h2>
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
            navigate("/good", { state })
          }}
          color="rgb(74, 191, 64)"
        >
          <strong>Да, всё здорово!</strong>
        </Button>
        <Button
          onClick={() => {
            navigate("/bad", { state })
          }}
          color="rgb(179, 81, 77)"
        >
          <strong>Нет, есть претензии</strong>
        </Button>
      </div>
    </Layout>
  )
}

export default RatePage
