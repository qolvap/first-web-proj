import React, { useState } from "react";
import data from "../datasource/data.js";

export default function Services() {
  const cards = data.map((item) => {
    return <Service key={item.id} {...item} />;
  });

  return (
    <section id="services" className="cards-list">
      {cards}
    </section>
  );
}

function Service(props) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="services">
      <div className="card" id="service--card" onClick={handleClick}>
        <div className="service--info">
          <h4 className="service--title">
            {showDescription ? props.description : props.title}
          </h4>
        </div>
      </div>
    </div>
    
  );
}
