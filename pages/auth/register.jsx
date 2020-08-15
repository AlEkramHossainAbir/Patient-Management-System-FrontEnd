import Mylayout from "../../components/Mylayouts";
import RegistrationForm from "../../components/auth/Register";
import React, { Component } from "react";
class RegistrationPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <RegistrationForm />
        </Mylayout>
      </>
    );
  }
}

export default RegistrationPage;
