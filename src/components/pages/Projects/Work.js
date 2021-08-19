import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="grid-container">
      <h1>Featured Work</h1>
      <div className="col1">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Employee Tracker</h4>
            <p className="card-text">
              Employee Tracker is a command-line application. At the command
              line, type in "node index.js" to run the application. The user
              will be presented with a series of questions related to the
              operations inside of a business. The user is to provide all needed
              information requested.
            </p>
            <button className="big-button">
              <a href="#https://github.com/vivicowan/employee-tracker">
                GitHub Repository
              </a>
            </button>
            <img
              src="../images"
              className="card-img-top wd img-fluid"
              alt="employee-tracker"
            />
          </div>
        </div>
      </div>
      <div className="col2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Team-Profile Generator</h4>
            <p className="card-text">
              Team Profile Generator is a command-line application. The user
              will be presented with a series of questions related to the team
              members. The user is to provide all needed information by
              answering the series of questions. Once the user has answered all
              questions, the HTML output file using the team name as the file
              name will be generated under the "dist" folder.
            </p>
            <button className="big-button">
              <a href="#https://github.com/vivicowan/team-profile-generator">
                GitHub Repository
              </a>
            </button>
            <img
              src="./assets/img/mockup.png"
              className="card-img-top ws img-fluid"
              alt="Team-Profile-Generator"
            />
          </div>
        </div>
      </div>
      <div className="col3">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">MyKNL</h4>
            <p className="card-text">
              This app allows pet owners to be able to easily book a reservation
              at their local pet hotel. Users will be able to make an account
              with their own pet and reservation data.
            </p>
            <button className="big-button">
              <a href="#https://github.com/zzangu0215/zzangu-and-the-pals">
                GitHub Repository
              </a>
            </button>
            <button className="big-button">
              <a href="#https://myknl-zap.herokuapp.com/">
                Deployed Heroku Page
              </a>
            </button>
            <img
              src="./assets/img/myknl.png"
              className="card-img-top cl img-fluid"
              alt="MyKNL"
            />
          </div>
        </div>
      </div>
      <div className="col4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Tech Blog</h4>
            <p className="card-text">
              This quiz is a fun way to test your knowledge on introductory
              coding.
            </p>
            <button className="big-button">
              <a href="#https://github.com/vivicowan/tech-blog">
                GitHub Repository
              </a>
            </button>
            <button className="big-button">
              <a href="#https://lit-wave-94013.herokuapp.com/">
                Deployed Heroku Page
              </a>
            </button>
            <img
              src="./assets/img/techblog.png"
              className="card-img-top cq img-fluid"
              alt="Tech-Blog"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
