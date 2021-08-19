import React from "react";
import "./NavTabs.css";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <a
        href="#home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
      >
        HOME
      </a>
      <a
        href="#about"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        ABOUT
      </a>
      <a
        href="#work"
        onClick={() => handlePageChange("Blog")}
        className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
      >
        WORK
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        CONTACT
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        RESUME
      </a>
      <div id="indicator"></div>
    </nav>
  );
}

export default NavTabs;
