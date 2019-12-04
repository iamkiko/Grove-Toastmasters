import React, { useState, createRef } from "react"
import Recaptcha from "react-google-recaptcha"
import { navigate } from "gatsby-link"

import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const facebook = require("simple-icons/icons/facebook.svg")
const meetup = require("simple-icons/icons/meetup.svg")

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
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
  const [state, setState] = useState({})
  const recaptchaRef = createRef()

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10812.839051099058!2d18.465396090523743!3d-33.970091645721105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1c1fa1e9c646622!2sKelvin%20Grove%20Club!5e0!3m2!1sen!2sza!4v1574845875175!5m2!1sen!2sza"
          title="Find us"
          frameborder="0"
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
          <input type="hidden" name="form-name" value="contact-recaptcha" />
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
          <Recaptcha
            ref={recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            // onChange={handleRecaptcha}
          />
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
