import React from 'react'
import { Link } from 'gatsby'
import './SideDrawer.scss'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to={"/"}>Startseite</Link></li>
        <li><Link to={"/"}>Leistungen</Link></li>
        <li><Link to={"/"}>Über uns</Link></li>
        <li><Link to={"/"}>Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;