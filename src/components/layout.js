/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const setVh = () => {
  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  setVh()
  if (typeof window !== "undefined") {
    window.addEventListener("resize", setVh)
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 15,
          width: "100%",
          height: "100%",
          maxWidth: 560,
          boxShadow: "1px 2px 10px grba(255,255,255,.5)",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
