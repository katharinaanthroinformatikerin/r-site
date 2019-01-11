import React, {Component} from 'react'
import SideDrawer from '../SideDrawer/sideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import Toolbar from '../Toolbar/toolbar'
import './Header.scss'

class Header extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} siteTitle={this.props.siteTitle}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
}

export default Header;
