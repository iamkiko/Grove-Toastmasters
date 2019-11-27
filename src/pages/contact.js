import React from "react"
import Recaptcha from "react-google-recaptcha"
import { navigate } from "gatsby-link"

import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const facebook = require("simple-icons/icons/facebook.svg")
const meetup = require("simple-icons/icons/meetup.svg")

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

console.log(RECAPTCHA_KEY)
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var ITE_RECAPTCHA_KEY is undefined!
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = () => {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h3>Contact Us</h3>

        <p>Interested, curious and want to know more? </p>
        <p>
          Feel free to email us at{" "}
          <span className={contactStyles.contact}>
            grove-tm-exco@googlegroups.com
          </span>
        </p>
        <h4 className={contactStyles.findUs}>Find us on:</h4>
        <ul className={contactStyles.list}>
          <li>
            {" "}
            <a
              href="https://www.facebook.com/GroveToastmastersClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            -{" "}
            <a
              href="https://www.facebook.com/GroveToastmastersClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={contactStyles.svgResize}
                alt="facebook"
                src={facebook}
              />
            </a>{" "}
          </li>

          <li>
            <a
              href="https://www.meetup.com/toastmasters-clubs-in-cape-town/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meetup
            </a>{" "}
            -{" "}
            <a
              href="https://www.meetup.com/toastmasters-clubs-in-cape-town/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={contactStyles.svgResize}
                alt="meetup"
                src={meetup}
              />{" "}
            </a>
          </li>
        </ul>

        <h4 className={contactStyles.visit}>Visit us:</h4>
        <iframe
          className={contactStyles.map}
          frameborder="0"
          title="Find us"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm7CeaitdzB0RImZknB76wdE&key="
          allowfullscreen
        ></iframe>
        <p>
          Alternatively, fill in your details below and we will get in touch.
        </p>
        <p className={contactStyles.nb}>
          Please note, if you intend on joining, let us know in advance and
          whether you <br />
          have any dietary requirements, for catering purposes.
        </p>
        <form
          name="contact-recaptcha"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
          className={contactStyles.form}
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <p>
            <label>
              Name:
              <br />
              <input type="text" name="name" onChange={handleChange} required />
            </label>
          </p>
          <p>
            <label>
              Email:
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Contact number:
              <br />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                onChange={handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} required />
            </label>
          </p>
          <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
          <div className={contactStyles.submit}>
            <button className={contactStyles.button} type="submit">
              <span className={contactStyles.buttonStyle}>Submit</span>
            </button>
          </div>
        </form>
      </Layout>
    </div>
  )
}

export default ContactPage
