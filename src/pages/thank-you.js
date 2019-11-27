import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"

const ThankYouPage = () => (
  <Layout>
    <h2>
      <span className={contactStyles.connect}>Success!</span>
    </h2>
    <p>Thank you, we have received your message and will be in touch soon.</p>
    <p>In the meantime, feel free to follow us on social media below:</p>
  </Layout>
)

export default ThankYouPage
