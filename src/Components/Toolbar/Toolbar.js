import React from "react";
import "./Toolbar.css";

import ToolbarLogo from "../ToolbarLogo/ToolbarLogo";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <ToolbarLogo />
      </div>
    );
  }
}

export default Toolbar;
