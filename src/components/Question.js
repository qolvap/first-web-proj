import React, { useState, useEffect } from "react";

export default function Question() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setShowThankYou(true);

    setFormData({ name: "", email: "", message: "" });
  };

  // shows the thank you for the message paragraph for the 5 sec
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showThankYou]);

  return (
    <section>
      <div className="questions">
        <div className="questions--column--one">
          <h3>If You struggle with new EU regulations</h3>
          <h2>We are here to help You</h2>
          <div className="ask--steps" id="ask--steps">
            <h3>Ask a question</h3>
            <p>Type the problem you need to be solved</p>
            <h3>Wait for the feadback</h3>
            <p>
              Our team will contact you with the solution as soon as possible.
              We know how time is valuable in our sphere of work
            </p>
            <h3>Feel safe to drive</h3>
            <p>
              We help you to run Your buisness safly and wisly, so dont hesitate
              to reach us.
            </p>
      
          </div>
          
        </div>
        <div className="questions--column--two">
          <div classNmae="questions--form--section>">
            <form method="post" onSubmit={handleSubmit}>
              <div className="contact--form">
                <h1>
                  Contact <span>Us</span>
                </h1>
                <input
                  type="text"
                  name="name"
                  className="contact-name"
                  id="contact-name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Please enter Your name"
                />
                <input
                  type="text"
                  name="email"
                  className="contact-email"
                  id="contact-email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Please enter Your email"
                />
                <textarea
                  name="message"
                  className="contact-message"
                  id="contact-message"
                  onChange={handleChange}
                  value={formData.message}
                  cols="30"
                  rows="10"
                  style={{ resize: "none" }}
                  placeholder="Please type Your message here"
                ></textarea>
                <button type="submit" className="contact-submit">
                  Send
                </button>
              </div>
            </form>

            {showThankYou && (
              <div className="thank-you-message">
                Thank you for the message! We will reach You as soon as
                possible!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}