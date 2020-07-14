import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import ImageEmojiSad from "../components/image-emoji-sad"
function Bad() {
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
      ></textarea>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Button bordered>Отправить</Button>
      </div>
    </Layout>
  )
}

export default Bad
