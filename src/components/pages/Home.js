import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main className="px-3">
        <i className="fas fa-code"></i>
        <i className="fas fa-code-branch"></i>
        <i className="fas fa-bomb"></i>
        <i className="fas fa-star-of-life"></i>
        <span>VIVIANNA COWAN</span>
        <p className="lead">
          ASSOCIATE SOFTWARE ENGINEER
          <br />
          BORN IN SAN DIEGO, MOVING TO DALLAS
          <br />
          NOW AVAILABLE FOR YOU
        </p>
      </main>
    </div>
  );
}
