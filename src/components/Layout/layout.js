import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

import Header from '../Header/Header'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
      <div id="all_but_footer">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{ marginLeft: `auto`, marginRight: `auto`, marginTop: `80px`, backgroundColor: `#CDD9DE`, height:`100%`}} id="page-content">
          {children}
        </div>
      </div>
      <footer id="footer">
        © {new Date().getFullYear()}
      </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
