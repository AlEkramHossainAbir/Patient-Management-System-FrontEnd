import Advice from "../components/Advice";
import Mylayout from "../components/Mylayouts";
import React, { Component } from "react";
class Advic extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Advice></Advice>
        </Mylayout>
      </>
    );
  }
}

export default Advic;
