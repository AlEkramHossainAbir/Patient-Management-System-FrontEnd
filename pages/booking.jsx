import React, { Component } from "react";
import MyLayout from "../components/Mylayouts";
import Booking from "../components/Booking";
class Booked extends Component {
  render() {
    return (
      <>
        <MyLayout>
          <Booking></Booking>
        </MyLayout>
      </>
    );
  }
}

export default Booked;
