import React from "react";
import truck from "../components/truck.png";

export default function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about--column--one">
          <h4>
            Take care of the <span>safety</span> of <span>Your</span> company
          </h4>
          <br></br>
          <h1>
            Save <span>Your</span> time with <span>our</span> Experts
          </h1>
          <br></br>
          <p>Your problems — Our solutions in European Road Transport Law</p>
          <br></br>
          <div className="about--btns">
          <a className="learn--more--btn" href="/Advantages">Learn more</a>
          </div>
        </div>
        <div className="about--column--two">
        <img className="truck--img" src={truck}></img>
        </div>
       
      </div>
      <div className="about--text--section">
        <h4>
        About Company
          </h4>
          <br></br>
          <h1>
          Our lawyers can assist you with all road transport matters
          </h1>
          <br></br>
          <p>For more than 15 years at the market we provide security to our clients. <br></br>
            Speak to one of our lawyers today and find out how we can help you and your business
          </p>
          <br></br>
          <a className="ask--q--btn" href="/Question">Contact us</a>
          </div>

          <div className="about--statistics">
            <div className="about--statistics--one">
              <h4>500</h4>
              <p>Firms trusted us</p>
            </div>
            <div className="about--statistics--two">
            <h4>1000</h4>
              <p>Court cases won</p>
            </div>
            <div className="about--statistics--three">
            <h4>5000</h4>
              <p>Drivers trained</p>
            </div>
            
          </div>
    </section>
  );
}