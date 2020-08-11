import React, { Component } from "react";
import Header from "./Header";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="http://localhost:3000/" action="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
            <ul>
              <li>
                <a href="#">our team</a>
              </li>
              <li>
                <a href="#">Project Purpose</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Mission &amp; Vision</a>
              </li>
            </ul>{" "}
          </li>
          <li>
            <a href="../Layout">Contact</a>
            <ul>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Direction</a>
              </li>
            </ul>{" "}
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="../doctorslist">Doctor's Information</a>
          </li>
          <li>
            <a href="../doctorslist">Appointement</a>
            <ul>
              <li>
                <a href="#">Online</a>
              </li>
              <li>
                <a href="#">Offline</a>
              </li>
            </ul>{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
