import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import aboutStyles from "./about.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h3 className={aboutStyles.title}>
          Let's master public speaking together.
        </h3>
        <p>
          Grove is a dinner club that meets on the{" "}
          <span className={aboutStyles.emphasis}>
            first Wednesday of every month, at 18:30 at Kelvin Grove
          </span>
          .
        </p>
        <p>
          Founded in 1994, we have focused on being an all-inclusive family of
          public speakers from all backgrounds and experience levels.
        </p>
        <p>
          <Link to="/about">Meet the team</Link>
        </p>
        <p>
          We are open to all interested in improving their confidence and
          communication, seeking to build leadership skills or simply are
          curious!
        </p>
        <p>
          We welcome <span className={aboutStyles.emphasis}>all</span> guests
          and speakers, regardless of experience levels to join us for dinner
          with a variety of speeches from diverse backgrounds and varying
          topics. There is no obligation to join or speak; we are aware of how
          daunting the first steps can be!
        </p>
        <p>
          We are a member of Toastmasters International, a non-profit
          educational organization that teaches public speaking and leadership
          skills through a worldwide network of clubs.
        </p>
        <a
          href="https://www.toastmasters.org/Find-a-Club/00009879-the-grove-club"
          target="_blank"
          rel="noopener noreferrer"
        >
          View our club information on the official Toastmasters Website
        </a>
        .
      </div>
    </Layout>
  )
}

export default IndexPage
