import React from "react";
import "./ToolbarItem.css";

import ToolbarLogo from "../ToolbarLogo/ToolbarLogo";

class ToolbarItem extends React.Component {
  render() {
    return <div className="ToolbarItem">{this.props.children}</div>;
  }
}

export default ToolbarItem;
