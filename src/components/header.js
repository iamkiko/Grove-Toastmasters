import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
// import Navbar from "./navbar"
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
          <Link className={headerStyles.title} to="/">
            <img
              className={headerStyles.logo}
              src={require("../assets/logo.png")}
              alt="tm-logo"
            />
            {"                 "}
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
      {/* <Navbar className={headerStyles.sticky} /> */}
    </header>
  )
}

export default Header
