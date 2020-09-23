import React, { Component } from "react";
import MyLayout from "../../../components/Mylayouts";
import BreastCancer from "../../../components/disease/cancer/Breast";
class Breast extends Component {
  render() {
    return (
      <>
        <MyLayout>
          <BreastCancer></BreastCancer>
        </MyLayout>
      </>
    );
  }
}

export default Breast;
