import Mylayout from "../components/Mylayouts";
import Doctors from "../components/Doctors";
import React, { Component } from "react";
class DoctorsList extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Doctors></Doctors>
        </Mylayout>
      </>
    );
  }
}

export default DoctorsList;
