import React, { Component } from "react";
import Appointment from "../components/Appointment";
import MyLayout from "../components/Mylayouts";
class Appointed extends Component {
  state = {};
  render() {
    return (
      <>
        <MyLayout>
          <Appointment></Appointment>
        </MyLayout>
      </>
    );
  }
}

export default Appointed;
