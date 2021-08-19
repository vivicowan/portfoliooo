import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div
      id="landing-page"
      class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
    >
      <div class="row row-cols-1 row-cols-md-1 g-4">
        <h1>Featured Work</h1>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Employee Tracker</h4>
              <p class="card-text">
                Employee Tracker is a command-line application. At the command
                line, type in "node index.js" to run the application. The user
                will be presented with a series of questions related to the
                operations inside of a business. The user is to provide all
                needed information requested.
              </p>
              <button type="button" class="btn btn-dark" id="wd-repo-btn">
                GitHub Repository
              </button>
              <img
                src="../images"
                class="card-img-top wd img-fluid"
                alt="employee-tracker"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Team-Profile Generator</h4>
              <p class="card-text">
                Team Profile Generator is a command-line application. The user
                will be presented with a series of questions related to the team
                members. The user is to provide all needed information by
                answering the series of questions. Once the user has answered
                all questions, the HTML output file using the team name as the
                file name will be generated under the "dist" folder.
              </p>
              <button type="button" class="btn btn-dark" id="ws-repo-btn">
                GitHub Repository
              </button>
              <img
                src="./assets/img/mockup.png"
                class="card-img-top ws img-fluid"
                alt="Team-Profile-Generator"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">MyKNL</h4>
              <p class="card-text">
                This app allows pet owners to be able to easily book a
                reservation at their local pet hotel. Users will be able to make
                an account with their own pet and reservation data.
              </p>
              <button type="button" class="btn btn-dark" id="cl-repo-btn">
                GitHub Repository
              </button>
              <button type="button" class="btn btn-dark" id="cl-web-btn">
                Deployed Heroku Page
              </button>
              <img
                src="./assets/img/myknl.png"
                class="card-img-top cl img-fluid"
                alt="MyKNL"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Tech Blog</h4>
              <p class="card-text">
                This quiz is a fun way to test your knowledge on introductory
                coding.
              </p>
              <button type="button" class="btn btn-dark" id="cq-repo-btn">
                GitHub Repository
              </button>
              <button type="button" class="btn btn-dark" id="cq-web-btn">
                Deployed Heroku Page
              </button>
              <img
                src="./assets/img/techblog.png"
                class="card-img-top cq img-fluid"
                alt="Tech-Blog"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
