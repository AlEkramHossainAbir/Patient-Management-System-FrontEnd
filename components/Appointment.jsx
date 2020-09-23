import React, { Component } from "react";
import Header from "../components/common/Header";
class Appointment extends Component {
  check() {
    window.location.href = "/booking";
  }
  render() {
    return (
      <section className="appoint-section">
        <div className="appoint">
          <h1>Book And Appoint A doctor</h1>
          <img
            src="/image/undraw_Booking_re_gw4j.svg"
            style={{ height: "100px" }}
          ></img>
          <p>
            Automatic system of booking appointments and does not need the
            intervention of any medical staff. Search for a doctor who suits
            your needs.
          </p>
          <button className="btn btn-warning" onClick={this.check}>
            Book Now
          </button>
        </div>
      </section>
    );
  }
}

export default Appointment;
