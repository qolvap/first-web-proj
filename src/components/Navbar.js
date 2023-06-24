import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

export default function Navbar() {
  // const menuItems = [
  //   { id: 1, title: "about" },
  //   { id: 2, title: "services" }
  // ];

  return (
    <nav>
        <a href="/About"> <img alt="Logo" src={logo} className="tittle--img" id="nav--logo"/></a>
      <ul>
        {/* {menuItems.map((menu) => (
          <li>
            <a href={`${menu.title}`}>{menu.title}</a>
          </li>
        ))} */}

        <li>
          <Link to="/About" className="site--title">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Question" className="site--title">
            Ask us
          </Link>
        </li>
        <li>
          <Link to="/Advantages" className="site--title">
            Why us
          </Link>
        </li>
        <li>
          <Link to="/Services" className="nav--title">
            What we do
          </Link>
        </li>
        <li>
          <Link to="/Testimonials" className="site--title">
            Review
          </Link>
        </li>
      </ul>
    </nav>
  );
}
