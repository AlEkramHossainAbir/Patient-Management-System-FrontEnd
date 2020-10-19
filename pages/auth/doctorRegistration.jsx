import Mylayout from "../../components/Mylayouts";
import DoctorRegistrationForm from "../../components/auth/DoctorRegistration";
import React, { Component } from "react";
class doctorRegistration extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <DoctorRegistrationForm />
        </Mylayout>
      </>
    );
  }
}

export default doctorRegistration;
