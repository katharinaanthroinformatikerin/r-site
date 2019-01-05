import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './toolbar.scss'
import DrawerToggleButton from '../SideDrawer/drawerToggleButton';

const Toolbar = props => {
  return <header className="toolbar">
    <div className="quick-contact-info">
      <div className="spacer"></div>
      <span className="quick-contact-info-items text">Tel: +43 22 16 / 24 44</span>
      <span className="quick-contact-info-items text">E-Mail: office@pernicka.at</span>
    </div>
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
        <div className="toolbar__logo text"><Link to="/">{props.siteTitle}</Link></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items text">
        <ul>
          <li><Link to="/">Startseite</Link></li>
          <li><Link to="/">Leistungen</Link></li>
          <li><Link to="/">Über uns</Link></li>
          <li><Link to="/">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  </header>
}

Toolbar.propTypes = {
  siteTitle: PropTypes.string,
}

Toolbar.defaultProps = {
  siteTitle: ``,
}

export default Toolbar
