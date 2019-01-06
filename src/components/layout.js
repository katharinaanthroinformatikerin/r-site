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
        <div>
          {children}
          <footer style={{display: `flex`, justifyContent: `center`}}>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
