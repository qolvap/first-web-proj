import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials--section">
      <div className="testimonials--section--title">
        <h4 className="testimonials--title--description" id="testimonials--title--h4">Reviewed by People</h4>
        <h2 id="testimonials--title--h2">Client's Testimonials</h2>
        <p className="testimonials--title--description" id="testimonials--title--p">
          Check what the people think about us. Our clients have experienced our
          service and results
        </p>
      </div>
      <div className="testimonials--boxes">
        <div className="testimonials--box--one">
          <p>
            "We started the cooperation a year ago and had an amazing
            experience! The work is easy and smooth, the costs are very
            affordable. We highly recommend the company."
          </p>
          <div className="testimonials--profile">
            <h4>Dwight Schmute</h4>
            <p>Schmute farm</p>
          </div>
        </div>
        <div className="testimonials--box--two">
          <p>
            "Real experts in Transportation Law, highly professional. The team
            is really helpfull. We also take the reagular courses, gather
            meetings to study the new regulations from best."
          </p>
          <div className="testimonials--profile">
            <h4>Michael Scarn</h4>
            <p>Scranton</p>
          </div>
        </div>
      </div>
    </div>
  );
}