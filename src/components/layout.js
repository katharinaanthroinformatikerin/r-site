import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/header'
import './layout.scss'
import SideDrawer from './SideDrawer/sideDrawer'
import Backdrop from './Backdrop/Backdrop'


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
        <SideDrawer/>
        <Backdrop/>
        <Backdrop />
        <div style={{paddingTop: '64px'}}>
          {children}
          <footer>
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
