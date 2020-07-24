import emailjs from "emailjs-com"

export const sendEmail = async (
  templateParams,
  template = "template_iMeASqf3",
  cb
) => {
  return await new Promise((resolve, reject) => {
    emailjs
      .send(
        "gmail",
        template,
        templateParams,
        "user_5OmOqtH8z8CtXfsY01Fad",
        "55b10e404857a4304b6570809f717e43"
      )
      .then(
        response => {
          console.log("SUCCESS!", response?.status, response?.text)
          resolve()
        },
        err => {
          console.log("FAILED...", err)
          reject()
        }
      )
      .finally(() => {
        resolve()
      })
  })
}
