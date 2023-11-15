import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="sticky-top">
      <a className="navbar-brand" style={{ fontWeight: "500" }} href="/">
        ⚒️ ZotServices
      </a>

      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a class="btn" style={{ color: "black", fontWeight: "500" }} href="/">
            Search
          </a>
          |
          <a class="btn" style={{ color: "black", fontWeight: "500" }} href="/">
            Favorites
          </a>
          |
          <a class="btn" style={{ color: "black", fontWeight: "500" }} href="/">
            Create
          </a>
          |
          <a class="btn" style={{ color: "black", fontWeight: "500" }} href="/">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
