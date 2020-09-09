import Treatment from "../components/Treatment";
import Mylayout from "../components/Mylayouts";
import React, { Component } from "react";
class Treatments extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Treatment></Treatment>
        </Mylayout>
      </>
    );
  }
}

export default Treatments;
