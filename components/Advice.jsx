import React, { Component } from "react";
class Advice extends Component {
  state = {};
  render() {
    return (
      <section className="container-condition">
        <div className="advice">
          <div className="featured-message">
            <h2>Some Important Articles</h2>
          </div>
          <div className="wrap">
            <div className="content-advice">
              <img src="/image/depression.jpg"></img>
              <h2>Depression</h2>
              <a href="#">
                How To Diagnosis Depression: How To Cope After A Diagnosis
              </a>
              <a href="#">
                Depression In Older Adults: Can It Develop After Retirement?
              </a>
              <a href="#">
                Melatonin, Depression, And Happiness: What’s The Connection?
              </a>
              <a href="#">See more articles →</a>
            </div>
            <div className="content-advice">
              <img src="/image/anxiety.jpg"></img>
              <h2>Anxiety</h2>
              <a href="#">
                What Is An Anxiety Attack? 10 Ways To Recognize And Cope With An
                Anxiety Attack
              </a>
              <a href="#">
                Spiraling Out Of Control: How To Stay Calm When Dealing With
                Anxiety
              </a>
              <a href="#">
                Anxiety Attack Relief: 4 Methods To Cope With An Anxiety Attack
              </a>
              <a href="#">How to Cure Social Anxiety Using These 5 Tips</a>
              <a href="#">See more articles →</a>
            </div>
            <div className="content-advice">
              <img src="/image/depression.jpg"></img>
              <h2>Depression</h2>
              <a href="#">
                How To Diagnosis Depression: How To Cope After A Diagnosis
              </a>
              <a href="#">
                Depression In Older Adults: Can It Develop After Retirement?
              </a>
              <a href="#">
                Melatonin, Depression, And Happiness: What’s The Connection?
              </a>
              <a href="#">See more articles →</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Advice;
