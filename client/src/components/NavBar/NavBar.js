import React, { useState, useEffect } from "react";
import "./NavBar.css";
import headerLogo from "../../static/zotservices.png";
import Dropdown from "../../static/navdropdown.png";

// NavBar - nav bar which is applied to the top of every page
function NavBar() {
  // -----------------------------------------------------------
  // FOR MOBILE DESIGN
  const [MOBILE, setMobile] = useState(window.innerWidth <= 768);
  const [showingDrop, setShowingDrop] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMobileNavClick() {
    setShowingDrop(!showingDrop);
  }
  // -----------------------------------------------------------

  return (
    <nav className="sticky-top">
      {/* ZotServices Title */}
      <a
        className="navbar-brand"
        style={{ color: "white", fontWeight: "500", padding: "0 1vw" }}
        href="/"
      >
        <img
          src={headerLogo}
          alt={"ZotServices"}
          style={{
            width: "auto",
            height: "7vh",
            boxShadow: "none",
          }}
        ></img>
      </a>

      {/* Navigation */}
      <ul class="navbar-nav navbar-right" style={{ color: "white" }}>
        <li class="nav-item" style={{ display: MOBILE ? "none" : "block" }}>
          <a class="btn" style={{ color: "white", fontWeight: "500" }} href="/">
            Search
          </a>
          |
          <a
            class="btn"
            style={{ color: "white", fontWeight: "500" }}
            href="/create"
          >
            Create
          </a>
          |
          <a
            class="btn"
            style={{ color: "white", fontWeight: "500" }}
            href="/about"
          >
            About
          </a>
        </li>

        {/* MOBILE DROPDOWN */}
        <img
          src={Dropdown}
          alt="Menu"
          style={{
            display: MOBILE ? "block" : "none",
            boxShadow: "none",
            height: "10vh",
            width: "auto",
          }}
          onClick={handleMobileNavClick}
        ></img>

        <li
          className="mobile-dropdown"
          style={{
            width: "30vw",
            position: "fixed",
            top: "10vh",
            right: showingDrop ? "0" : "-110vw",
            transition: "right 0.5s ease-in-out",
          }}
        >
          <a class="btn" style={{ color: "white", fontWeight: "500" }} href="/">
            Search
          </a>
          <a
            class="btn"
            style={{ color: "white", fontWeight: "500" }}
            href="/create"
          >
            Create
          </a>
          <a
            class="btn"
            style={{ color: "white", fontWeight: "500" }}
            href="/about"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
