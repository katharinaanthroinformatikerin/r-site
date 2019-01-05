import React from 'react'
import './drawerToggleButton.scss'

const drawerToggleButton = props => (
  <button className={"toggle-button"} onClick={props.click}>
    <div className="lines-container">
      <div className={"toggle-button__line"}/>
      <div className={"toggle-button__line"}/>
      <div className={"toggle-button__line"}/>
    </div>
  </button>
);

export default drawerToggleButton;