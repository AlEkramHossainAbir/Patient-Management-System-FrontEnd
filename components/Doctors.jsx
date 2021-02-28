import Header from "./common/Header";
import React, { Component } from "react";
import { showDoctor } from "../services/authService";
import Axios from "axios";
class Doctor extends Component {

 


  async show1(){
    let showDoc =await showDoctor();
    let card = document.getElementsByClassName('card');
    console.log("Auth Service", showDoc);

    
    for(let i=0; i<showDoc.data.length;i++)
    {
      console.log("Auth Service data", showDoc.data[i].emailAddress);
      card[i].innerHTML = showDoc.data[i].emailAddress;
      
    }
   
   
    
  }
  state = {
    
  };
  render() {
    return (
      <section>
        <div className="container">
          <h1 className="heading">Our Doctors</h1>
          <div className="card-wrapper">
            <div>
              Check Show Doctor
              <button onClick={this.show1}>SHoW</button>
            </div>
            <div className="card">
     
            </div>


            <div className="card">
              <img
                src="/image/blood-pressure.jpg"
                alt="nurse"
                className="cardimage"
              ></img>
              <img
                src="/image/abir.jpg"
                alt="Abir"
                className="profileimage"
              ></img>
              <h1>Abir</h1>
              <p className="job-title">Psychiatrist</p>
              <p className="about">
                jkh dslhj dskljsa lkfjdslkf l jlsfjs jsldkjf
              </p>
              <a href="#" className="btn">
                View Profile
              </a>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <img
                src="/image/Screenshot_1.png"
                alt="nurse"
                className="cardimage"
              ></img>
              <img
                src="/image/proma.jpg"
                alt="Proma"
                className="profileimage"
              ></img>
              <h1>Lamiya</h1>
              <p className="job-title">Counselor</p>
              <p className="about">
                jkh dslhj dskljsa lkfjdslkf l jlsfjs jsldkjf
              </p>
              <a href="#" className="btn">
                View Profile
              </a>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <img
                src="/image/Screenshot_4.png"
                alt="nurse"
                className="cardimage"
              ></img>
              <img
                src="/image/nahid.jpg"
                alt="Nahid"
                className="profileimage"
              ></img>
              <h1>Salekin</h1>
              <p className="job-title">Neurologist</p>
              <p className="about">
                jkh dslhj dskljsa lkfjdslkf l jlsfjs jsldkjf
              </p>
              <a href="#" className="btn">
                View Profile
              </a>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <img
                src="/image/Screenshot_1.png"
                alt="nurse"
                className="cardimage"
              ></img>
              <img
                src="/image/pranto.jpg"
                alt="Pranto"
                className="profileimage"
              ></img>
              <h1>Pranto</h1>
              <p className="job-title">Medicine Specialist</p>
              <p className="about">
                jkh dslhj dskljsa lkfjdslkf l jlsfjs jsldkjf
              </p>
              <a href="#" className="btn">
                View Profile
              </a>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <img
                src="/image/Screenshot_4.png"
                alt="nurse"
                className="cardimage"
              ></img>
              <img
                src="/image/jubu2.jpg"
                alt="Jubair"
                className="profileimage"
              ></img>
              <h1>Jubair</h1>
              <p className="job-title">Counselor</p>
              <p className="about">
                jkh dslhj dskljsa lkfjdslkf l jlsfjs jsldkjf
              </p>
              <a href="#" className="btn">
                View Profile
              </a>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <img
                src="/image/Screenshot_4.png"
                alt="nurse"
                className="cardimage"
              ></img>
              <img
                src="/image/robin.jpg"
                alt="Robin"
                className="profileimage"
              ></img>
              <h1>Robin</h1>
              <p className="job-title">Psychiatrist</p>
              <p className="about">
                jkh dslhj dskljsa lkfjdslkf l jlsfjs jsldkjf
              </p>
              <a href="#" className="btn">
                View Profile
              </a>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Doctor;
