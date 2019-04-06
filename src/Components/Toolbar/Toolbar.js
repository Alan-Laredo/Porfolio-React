import React from "react";
import "./Toolbar.css";

import ToolbarLogo from "../ToolbarLogo/ToolbarLogo";
import ToolbarItem from "../ToolbarItem/ToolbarItem";
import ToolbarSpacer from "../ToolbarSpacer/ToolbarSpacer";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <ToolbarLogo />
        <ToolbarItem>Design</ToolbarItem>
        <ToolbarItem>Development</ToolbarItem>
        <ToolbarItem>Photography</ToolbarItem>
        <ToolbarSpacer>Spacer</ToolbarSpacer>
        <ToolbarItem>Contact</ToolbarItem>
      </div>
    );
  }
}

export default Toolbar;
