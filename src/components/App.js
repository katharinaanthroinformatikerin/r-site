import React, {Component} from 'react'
import SideDrawer from './SideDrawer/sideDrawer'
import Backdrop from './Backdrop/Backdrop'
import Header from './Header/header'
import PropTypes from 'prop-types'

class App extends Component  {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render{data => (
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />
    }

    <div style={{height: '100%'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      {sideDrawer}
      {backdrop}
      <Backdrop />
      <div style={{paddingTop: '64px'}}>
        {children}
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
)
}

export default App;