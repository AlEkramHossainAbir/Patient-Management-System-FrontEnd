import React, { Component } from "react";
import Mylayout from "../components/Mylayouts";
import Content from "../components/common/Content";

class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <Mylayout>
          <Content></Content>
        </Mylayout>
      </div>
    );
  }
}

export default Index;
