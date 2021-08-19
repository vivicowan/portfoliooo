import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <form className="form">
        <div className="pageTitle title">Contact Me! </div>
        <input type="text" className="name formEntry" placeholder="Name" />
        <input type="text" className="email formEntry" placeholder="Email" />
        <textarea
          className="message formEntry"
          placeholder="Message"
        ></textarea>

        <br />
        <button className="submit formEntry" onclick="thanks()">
          Submit
        </button>
      </form>
    </div>
  );
}
