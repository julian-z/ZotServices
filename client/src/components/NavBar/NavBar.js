import React from "react";
import "./NavBar.css";

// NavBar - nav bar which is applied to the top of every page
function NavBar() {
  return (
    <nav className="sticky-top">
      {/* ZotServices Title */}
      <a
        className="navbar-brand"
        style={{ color: "white", fontWeight: "500", padding: "0 1vw" }}
        href="/"
      >
        ⚒️ ZotServices
      </a>

      {/* Navigation */}
      <ul class="navbar-nav navbar-right" style={{ color: "white" }}>
        <li class="nav-item">
          <a class="btn" style={{ color: "white", fontWeight: "500" }} href="/">
            Search
          </a>
          |
          <a class="btn" style={{ color: "white", fontWeight: "500" }} href="/">
            Favorites
          </a>
          |
          <a class="btn" style={{ color: "white", fontWeight: "500" }} href="/">
            Create
          </a>
          |
          <a class="btn" style={{ color: "white", fontWeight: "500" }} href="/">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
