import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

import newsStyles from "./news.module.scss"

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="News" />
      <div>
        <h2 className={newsStyles.news}>News</h2>
        <ol className={newsStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge, index) => {
            return (
              <li key={index} className={newsStyles.post}>
                <Link to={`/news/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default News
