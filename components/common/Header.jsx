import React, { Component } from "react";
import Head from "next/head";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
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
        <header>
          <div className="head">
            <div className="logo">
              <img src="/stethoscope.svg" />
              <a href="#" className="name">
                Counselling Managememnt System
              </a>
            </div>
            <info>
              <a href="/auth/login">Login</a>
              <a href="/auth/register">Registration</a>
              <Search
                style={{ width: "50%" }}
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={(value) => console.log(value)}
              />
            </info>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
