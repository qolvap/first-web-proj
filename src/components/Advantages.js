import React from "react";
import {Link} from "react-router-dom";
import guarantee from "../components/guarantee.png";
import price from "../components/price.png";
import update from "../components/update.png";


export default function Advantages() {
  return (
    <section>
      <div className="advantages--section">
        <div className="advantage--section--left">
          <h3 className="advantages--description">
            The experience and necessary knowledge in the transport industry
            that our specialists have guarantees that the services provided are
            at the highest level
          </h3>
          <br></br>
          <h1>
            <span className="advantages--span">
              Best ADVICE AND REPRESENTATION
            </span>{" "}
            in Transport Law{" "}
            <span className="advantages--span">You will ever find</span>
          </h1>
          <br></br>
          <p className="advantages--description">
            We provide, simple, straightforward, and practical legal solutions
            to all your transport problems. We're dedicated to providing you
            with the best value for your money, so you can enjoy top-quality
            services and products without breaking the bank.
          </p>
          <br></br>
          <Link className="link" to="/Testimonials" >
                  <li className="advantages--btn" >Reviewed by people</li>
                  </Link>
                 
                
        </div>
        <div className="advantage--section--right">
        
          <div className="advantage--container">
          <img src={guarantee} id="guarantee"></img>
          <div className="advantage--container--text">
            <h4>We guarantee our work</h4>
            <p>
              Our road transport experts have niche experience in advising
              businesses, individuals, and even trade associations on legal
              matters relating to the transport industry.{" "}
            </p>
            </div>
          </div>
          
          <div className="advantage--container">
          <img src={update} id="update"></img>
          <div className="advantage--container--text">
            <h4>We listen, suggest, and update</h4>
            <p>
              Developments in case law can mean that what was legal yesterday,
              is not necessary legal today. It can often be difficult for
              businesses to keep up to speed with the latest changes.
            </p>
            </div>
          </div>
          
          <div className="advantage--container">
          <img src={price} id="price"></img>
          <div className="advantage--container--text">
            <h4>Fixed prices and no surprises</h4>
            <p>
              Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner--section">
      <div className="service--banner">
        <h1 class="bottom-text">What we can do for You?</h1>
                <Link className="link" to="/Services" >
                  <li className="service--banner--btn">Check what service we offer</li>
                </Link>
        
      </div>
      </div>
    </section>
  );
}