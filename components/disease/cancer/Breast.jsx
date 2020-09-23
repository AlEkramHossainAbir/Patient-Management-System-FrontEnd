import React, { Component } from "react";
import Header from "../../common/Header";
class Breast extends Component {
  render() {
    return (
      <section>
        <div className="cancer">
          <h1>Breast cancer</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jPtCkcILCGU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h1>What is breast cancer?</h1>
          <p>
            Breast cancer forms in tissues of the breast, usually the ducts
            (tubes that carry milk to the nipple) and lobules (glands that make
            milk). It occurs in both men and women, although male breast cancer
            is rare.
          </p>
        </div>
      </section>
    );
  }
}

export default Breast;
