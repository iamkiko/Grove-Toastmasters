import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const facebook = require("simple-icons/icons/facebook.svg")
const meetup = require("simple-icons/icons/meetup.svg")
const mailto = require("simple-icons/icons/minutemailer.svg")

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.created}>
        {data.site.siteMetadata.author} © 2019
      </div>

      <div className={footerStyles.connect}>
        <a
          href="https://www.facebook.com/GroveToastmastersClub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={footerStyles.svgConnect}
            alt={facebook}
            src={facebook}
          />
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a
          href="https://www.meetup.com/toastmasters-clubs-in-cape-town/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={footerStyles.svgConnect} alt={meetup} src={meetup} />
        </a>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="mailto:grove-tm-exco@googlegroups.com">
          <img className={footerStyles.svgConnect} alt={mailto} src={mailto} />
        </a>{" "}
      </div>
    </footer>
  )
}

export default Footer
