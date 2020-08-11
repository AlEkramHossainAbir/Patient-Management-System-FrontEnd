import Mylayout from "../../components/Mylayouts";
import Navbar from "../../components/common/Navbar";
import Login from "../../components/auth/Login";
import React, { Component } from "react";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Navbar />
          <Login></Login>
        </Mylayout>
      </>
    );
  }
}

export default LoginPage;
