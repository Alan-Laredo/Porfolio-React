import React from "react";
import "./ToolbarLogo.css";

class ToolbarLogo extends React.Component {
  render() {
    return (
      <div className="ToolbarLogo">
        <i className="fab fa-stylish">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            role="img"
            className="svg-inline--fa fa-github fa-w-16"
            data-icon="github"
            data-prefix="fab"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M 39.296265,454.01835 232.22082,14.1965 456.70373,497.8035 213.13835,280.17633 265.30631,258.56765 393.58534,410.23177 232.22082,122.14287 Z"
            />
          </svg>
        </i>
      </div>
    );
  }
}

export default ToolbarLogo;
