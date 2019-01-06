import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

import Header from './Header/Header'


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
      <div style={{height: '100%'}}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{ marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto`, marginTop: `80px`, backgroundColor: `#CDD9DE`}} id="page-content">
          {children}
        </div>
        <footer style={{display:`block`, width: `100%`, position: `static`, bottom: `0`}}>
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
