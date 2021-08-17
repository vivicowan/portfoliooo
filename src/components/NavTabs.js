import React from "react";

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
        About
      </a>
      <a
        href="#blog"
        onClick={() => handlePageChange("Blog")}
        className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
      >
        Blog
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </a>
      <div id="indicator"></div>
    </nav>
  );
}

export default NavTabs;
