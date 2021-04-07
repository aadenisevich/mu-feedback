import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import ImageEmojiHappiness from "../components/image-emoji-happiness"
import Button from "../components/button"
import SEO from "../components/seo"

const IndexPage = () => {
  const [agreementAcepted, setAgreementAcepted] = useState(false)
  const [fio, setFio] = useState(null)
  const [number, setNumber] = useState(null)
  return (
    <Layout>
      <SEO title="Welcome" />
      <div
        style={{
          width: "100%",
          marginBottom: `1.45rem`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 100, height: 100 }}>
          <ImageEmojiHappiness />
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>
        Оставить отзыв о работе MelanomaUnit
      </h2>
      <p>
        Обычно люди не находят времени оставить отзыв, если им всё понравилось.
        <br />
        <strong>А вы нашли. Мы это ценим.</strong>
      </p>
      <p>Пожалуйста, представьтесь:</p>
      <input
        placeholder="Ваше ФИО"
        onChange={({ target: { value } }) => setFio(value)}
        style={{ fontSize: 15, height: 45 }}
      ></input>
      <input
        type="tel"
        placeholder="Номер телефона"
        style={{ marginTop: 10, fontSize: 15, height: 45 }}
        onChange={({ target: { value } }) => setNumber(value)}
      />
      <div style={{ marginTop: 10 }}>
        <input
          type="checkbox"
          id="agreement"
          checked={agreementAcepted}
          onChange={({ target: { checked } }) => {
            setAgreementAcepted(checked)
          }}
        />
        <label for="agreement">
          &nbsp;согласен(на) на обработку персональных данных
        </label>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            navigate("/rate", {
                state: {
                  fio,
                  number
                },
              })
          }}
          disabled={!agreementAcepted || !fio || !number}
          bordered
          color="rgb(227, 95, 87)"
          disabledColor="rgb(183, 147, 144)"
          styles={{borderRadius: 30, alignItems: 'center',boxShadow: '0 1px 10px rgba(183, 147, 144, .3)'}}
        >
          <strong>Далее</strong>
        </Button>
      </div>
    </Layout>
  )
}
export default IndexPage
