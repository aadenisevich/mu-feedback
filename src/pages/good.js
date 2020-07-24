import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import ImageEmojiHappiness from "../components/image-emoji-happiness"
import ImageYa from "../components/image-ya"
import ImageG from "../components/image-g"
import ImagePrd from "../components/image-prd"
import { navigate } from "gatsby"
import { sendEmail } from "../utils/emailjs"

function Good({ location: { state } }) {
  const [sendig, setSending] = useState(false)
  useEffect(() => {
    if (!state || !state.fio || !state.number) {
      navigate("/")
    }
  }, [])

  console.log(state)
  return (
    <Layout>
      <div style={{ position: "absolute", right: -50, top: -40, opacity: 0.6 }}>
        <div style={{ width: 200, height: 200, transform: "rotate(0.9turn)" }}>
          <ImageEmojiHappiness />
        </div>
      </div>
      <h2>Оставить отзыв о нашей работе</h2>
      <p>
        Обычно люди не находят времени оставить отзыв, если им всё понравилось.
        <br />
        <strong>А вы нашли. Мы это ценим.</strong>
      </p>
      <p>
        <strong>{state?.fio}</strong>, в благодарность мы предоставим Вам скидку{" "}
        <strong>10%</strong> на следующий приём за отзыв на одном из сайтов:
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            bordered
            width={150}
            disabled={sendig}
            onClick={async () => {
              setSending(true)
              await sendEmail(
                { site: "yandex", fio: state.fio, number: state.number },
                "template_iMeASqf3_clone"
              )
              setSending(false)
              navigate(
                "https://yandex.ru/profile/112869737797?intent=reviews&utm_source=qr&utm_medium=qr_image&utm_campaign=v1&lr=213"
              )
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: 30, height: 30, marginRight: 2 }}>
                <ImageYa />
              </div>
              <span>Яндекс</span>
            </div>
          </Button>
          <Button
            bordered
            width={150}
            marginLeft={20}
            disabled={sendig}
            onClick={async () => {
              setSending(true)
              await sendEmail(
                { site: "google", fio: state.fio, number: state.number },
                "template_iMeASqf3_clone"
              )
              setSending(false)
              navigate(
                "http://search.google.com/local/writereview?placeid=ChIJwaEVQI1JtUYRpfYCD0Ll3y0"
              )
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: 20, height: 30, marginRight: 10 }}>
                <ImageG />
              </div>
              <span>Google</span>
            </div>
          </Button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            bordered
            width={320}
            disabled={sendig}
            onClick={async () => {
              setSending(true)
              await sendEmail(
                { site: "prodoctorov", fio: state.fio, number: state.number },
                "template_iMeASqf3_clone"
              )
              setSending(false)
              navigate("https://prodoctorov.ru/new/rate/lpu/55003/")
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%", height: 30 }}>
                <ImagePrd />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Good
