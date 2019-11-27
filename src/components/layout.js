import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import Navbar from "./navbar"

const Layout = props => {
  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          <Navbar className={layoutStyles.sticky} />
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
