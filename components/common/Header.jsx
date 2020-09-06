import React, { Component } from "react";
import Head from "next/head";
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
                  About Us
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Our Team
                  </a>
                  <a className="dropdown-item" href="#">
                    Project Purpose
                  </a>
                  <a className="dropdown-item" href="#">
                    Resources
                  </a>
                  <a className="dropdown-item" href="#">
                    Mission & Vision
                  </a>
                </div>
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
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/register" target="_blank">
                  Registration
                </a>
              </li>
              <Search
                className="search"
                style={{ float: "right", width: "25%" }}
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
