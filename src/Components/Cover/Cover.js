import React, { Component } from "react";
import "./Cover.css";

export default class Cover extends Component {
  render() {
    return (
      <div className="main">
        <div className="Cover">
          <h1>Hi! I'm Alan</h1>
          <p>I'm a Junior Front-end Developer and Designer</p>
          <div className="icons">
            <a href="https://github.com/Alan-Laredo" target="blank">
              <i class="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/alanlaredo" target="blank">
              <i class="fab fa-linkedin" />
            </a>
            <a href="https://userstyles.org/users/796885" target="blank">
              <i className="fab fa-stylish">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  role="img"
                  data-icon="stylish"
                  data-prefix="fab"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M 114.76944,7.982199 C 51.1872,7.982199 0,59.169399 0,122.75164 V 297.03116 H 229.1024 V 7.982199 Z m 152.12816,0 V 164.74796 H 496 v -42.0112 C 496,59.154519 444.8128,7.967319 381.23056,7.967319 Z m 0,194.560961 V 491.59212 H 381.23056 C 444.8128,491.59212 496,440.40492 496,376.82268 V 202.54316 Z M 0,334.82636 v 42.0112 C 0,440.4198 51.1872,491.607 114.76944,491.607 H 229.1024 V 334.84124 Z"
                  />
                </svg>
              </i>
            </a>
            <a href="mailto:AlanLaredo@hotmail.com" target="blank">
              <i class="fas fa-envelope" />
            </a>
          </div>
        </div>
        <a className="scroll-link" href="#down">
          <svg
            className="mouse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 130"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fill-rule="evenodd">
              <rect
                width="70"
                height="118"
                x="1.5"
                y="1.5"
                stroke="#FFF"
                stroke-width="3"
                rx="36"
              />
              <circle
                className="scroll"
                cx="36.5"
                cy="31.5"
                r="4.5"
                fill="#FFF"
              />
            </g>
          </svg>
        </a>
      </div>
    );
  }
}
