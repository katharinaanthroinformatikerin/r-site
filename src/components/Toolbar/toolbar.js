import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './toolbar.scss'
import DrawerToggleButton from '../SideDrawer/drawerToggleButton';
import phone from '../../images/phone.svg';
import mail from '../../images/mail.svg';

const Toolbar = props => {
  return <header className="toolbar">
    <div className="quick-contact-info">
      <div className="spacer"></div>
      <span className="quick-contact-info-items text"><img src={phone} alt="Telefonnummer"/><span id="phone-number">+43 22 16 / 24 44</span></span>
      <span className="quick-contact-info-items text"><img src={mail} alt="E-Mail-Adresse"/><span id="e-mail-address">office@pernicka.at</span></span>
    </div>
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
        <div className="toolbar__logo text"><Link to="/">{props.siteTitle}</Link></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items text">
        <ul>
          <li className="one"><Link to="/">Startseite</Link></li>
          <li className="two"><Link to="/">Leistungen</Link></li>
          <li className="three"><Link to="/">Über uns</Link></li>
          <li className="four"><Link to="/">Kontakt</Link></li>
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
