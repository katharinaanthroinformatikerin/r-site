import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.scss'
import DrawerToggleButton from '../SideDrawer/drawerToggleButton';

const Header = ({ siteTitle }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className={"toolbar__logo"}><Link to={"/"}>{siteTitle}</Link></div>
      <div className={"spacer"}></div>
      <div className={"toolbar_navigation-items"}>
        <ul>
          <li><Link to={"/"}>Startseite</Link></li>
          <li><Link to={"/"}>Leistungen</Link></li>
          <li><Link to={"/"}>Über uns</Link></li>
          <li><Link to={"/"}>Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
