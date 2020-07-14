import React, { useState } from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import ImageEmojiSad from "../components/image-emoji-sad"
import emailjs from "emailjs-com"
import { navigate } from "gatsby"

function Bad() {
  const [message, setMessage] = useState(null)
  const [sendig, setSending] = useState(false)
  return (
    <Layout>
      <div style={{ position: "absolute", right: -50, top: -30, opacity: 0.6 }}>
        <div style={{ width: 200, height: 200, transform: "rotate(0.9turn)" }}>
          <ImageEmojiSad />
        </div>
      </div>
      <h2>Написать директору</h2>
      <p>Расскажите, что Вам не понравилось и что мы можем делать лучше.</p>
      <p>
        Директор клиники накажет виновных, свяжется с Вами и предложит решение
        проблемы.
      </p>
      <textarea
        style={{ height: 100 }}
        placeholder="Напишите, что Вас расстроило в нашем обслуживании"
        onChange={e => setMessage(e.target.value)}
        disabled={sendig}
      ></textarea>
      {
        sendig && <span>Запрос отпраляется...</span>
      }
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Button
          disabled={sendig}
          bordered
          onClick={() => {
            setSending(true)
            emailjs
              .send(
                "gmail",
                "template_iMeASqf3",
                { message },
                "user_5OmOqtH8z8CtXfsY01Fad",
                "55b10e404857a4304b6570809f717e43"
              )
              .then(
                response => {
                  console.log("SUCCESS!", response.status, response.text)
                },
                err => {
                  console.log("FAILED...", err)
                }
              )
              .finally(() => {
                setSending(false)
                navigate("/")
              })
          }}
        >
          Отправить
        </Button>
      </div>
    </Layout>
  )
}

export default Bad
