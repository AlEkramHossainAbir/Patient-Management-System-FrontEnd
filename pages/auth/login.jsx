import Mylayout from "../../components/Mylayouts";
import Login from "../../components/auth/Login";
import React, { Component } from "react";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Login></Login>
        </Mylayout>
      </>
    );
  }
}

export default LoginPage;
