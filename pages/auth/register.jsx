import Mylayout from "../../components/Mylayouts";
import Navbar from "../../components/common/Navbar";
import Login from "../../components/auth/Login";
import RegistrationForm from "../../components/auth/Register";
import React, { Component } from "react";
class RegistrationPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Navbar />
          <RegistrationForm />
        </Mylayout>
      </>
    );
  }
}

export default RegistrationPage;
