import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerLogo}>
        <h1>
          <img
            className={headerStyles.logo}
            src={require("../assets/logo-final.png")}
            alt="tm-logo"
          />
          <Link className={headerStyles.title} to="/">
            {"                 "}
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
