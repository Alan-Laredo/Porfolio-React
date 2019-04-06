import React from "react";
import "./ToolbarItem.css";

class ToolbarItem extends React.Component {
  render() {
    return <div className="ToolbarItem">{this.props.children}</div>;
  }
}

export default ToolbarItem;
