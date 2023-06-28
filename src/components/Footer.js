import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="foot">
      <div className="foot--container">
        <div className="row">
          <div className="column">
            <p>Contacts</p>
            <br></br>
            <ul>
              <li>(123)-456-789</li>
              <li>company@company.com</li>
            </ul>
          </div>
          <div className="column">
            <p>Working hours</p>
            <br></br>
            <ul>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div className="column">
              <p>Navigations</p>
              <br></br>
              <ul>
                  <Link className="link" to="/Advantages" >
                    <li className="footer--nav" >Why us</li>
                  </Link>
                  <Link className="link" to="/Question" >
                    <li className="footer--nav" >Ask us</li>
                  </Link>
                  <Link className="link" to="/Services" >
                    <li className="footer--nav" >What we do</li>
                  </Link>
              </ul>
            </div>
          <div className="column">
            <div className="subscription---column">
              <p>Subscription</p>
              <ul>
                <li>
                  <p>Subscribe your Email address for latest news & updates</p>
                </li>
                <div className="subscribe--box">
                  <li>
                    <input
                      className="email--input"
                      type="email"
                      placeholder="Please enter your email adress"
                    />
                  </li>
                  <li>
                    <button className="email--subscribtion">Submit</button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}