import React, { Component } from "react";
import Head from "next/head";
// import Login from "../auth/Login";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Ribbon from "antd/lib/badge/Ribbon";
import Footer from "./Footer";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: {},
      token: null,
      isLoggedIn: false,
    };
  }

  async componentDidMount() {
    if (
      localStorage.hasOwnProperty("me") &&
      localStorage.hasOwnProperty("token")
    ) {
      const me = localStorage.me;
      const token = localStorage.token;
      this.setState({ me: me, token: token, isLoggedIn: true });
    }
    // if (
    //   localStorage.hasOwnProperty("me") &&
    //   localStorage.hasOwnProperty("token")
    // ) {
    //   console.warn("Checking");
    // } 
    else {
      console.warn("No User Found");
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    // console.warn("update", prevState.me, "yo ", this.state.me);
    const previousState = await prevState.me;
    const currentState = this.state.me;
    console.warn("updated ", previousState, "yo ", currentState);

    // const data = await someAPICall();
    // if (prevState.me !== this.state.me) {
    //   this.setState({
    //     me: this.state.me,
    //     token: this.state.token,
    //     isLoggedIn: this.state.true,
    //   });
    // }
    if (this.state.me != prevState.me) {
      prevState.setState({
        me: me,
        token: token,
        isLoggedIn: true,
      });
    }
  }

  logOut=()=>{
    localStorage.removeItem("me")
    localStorage.removeItem("token");
    this.setState({isLoggedIn:false,me:{},token:null});
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossorigin="anonymous"
          ></link>
          <link rel="stylesheet" href="/style.css"></link>
        </Head>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="logo">
            <img src="/image/stethoscope.svg"></img>
          </div>

          <a className="navbar-brand" href="/">
            Counselling Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="../Layout">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../doctorslist">
                  Doctor's Information
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {/* <a className="dropdown-item" href="#">
                    Our Team
                  </a>
                  <a className="dropdown-item" href="#">
                    Project Purpose
                  </a>
                  <a className="dropdown-item" href="#">
                    Resources
                  </a> */}
                  <a className="dropdown-item" href="../conditions">
                    Diseases
                  </a>
                  <a className="dropdown-item" href="../treatment">
                    Treatment
                  </a>
                  <a className="dropdown-item" href="../advice">
                    Forum
                  </a>
                  <a className="dropdown-item" href="#">
                    Mission & Vision
                  </a>
                </div>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Map
                  </a>
                  <a className="dropdown-item" href="#">
                    Direction
                  </a>
                </div>
              </li> */}

              {!this.state.isLoggedIn ?
               (
                <li className="nav-item">
                  <a className="nav-link" href="/auth/login">
                    Login
                  </a>{" "}
                </li>
              ) : 
                
              <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Abir
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="../conditions">
                  View Profile
                </a>
                <a className="dropdown-item" href="/appointment">
                  AppointMent
                </a>
                <a className="dropdown-item" href="/auth/doctorRegistration">
                  Add Doctor
                </a>
                <a className="dropdown-item" href="#" onClick={this.logOut} >
                  LogOut
                </a>
              </div>
            </li>} 

              {/* {this.state.isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/auth/login">
                    LogOut
                  </a>{" "}
                </li>
              )} */}

  
              <Search
                className="search"
                style={{ float: "right", width: "40%" }}
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={(value) => console.log(value)}
              />
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
