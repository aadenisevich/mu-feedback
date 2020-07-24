import React, { useState } from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import ImageEmojiSad from "../components/image-emoji-sad"
import { navigate } from "gatsby"
import { sendEmail } from "../utils/emailjs"

function Bad({ location: { state } }) {
  if (!state || !state.fio || !state.number) {
    navigate("/")
  }
  console.log(state)
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
      <p>
        <strong>{state?.fio}</strong>, расскажите, что Вам не понравилось и что
        мы можем делать лучше.
      </p>
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
      {sendig && <span>Запрос отпраляется...</span>}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button
          disabled={sendig}
          bordered
          onClick={async () => {
            setSending(true)
            await sendEmail({ message, fio: state.fio, number: state.number })
            setSending(false)
            navigate("/")
          }}
        >
          Отправить
        </Button>
      </div>
    </Layout>
  )
}

export default Bad
