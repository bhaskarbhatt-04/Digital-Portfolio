import React from "react";
import "./Homepage.css";
import laptop from "./Photos/laptop.gif";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <div className="img-text">
        <div className="header1">
          <p>Hi, I am</p>
          <p>Bhaskar Bhatt</p>
          <div className="header2">
            <p>AI/ML Enthusiast</p>
            <p>& Web Developer</p>
          </div>
          <div className="second">
            <p>An enthusiastic and a passionate coder</p>
            <p>with an eye on detail and a focus to </p>
            <p>produce quality work.</p>
          </div>
          <div>
            <Link to="/Contact" className="btn btn-success">
              Hire me
            </Link>
          </div>
        </div>
        <img
          className="giffy"
          src={laptop}
          alt=".."
          height={300}
          width={400}
        ></img>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-phone-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
            </svg>
          </p>
          <p>+91-8755300911</p>
        </div>
        <div className="contact-item">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
          </p>
          <p>
            <Link
              to="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKkNDghwKPhGjkwRdCfTWfMCSpdJccdspmzkkLnfQdVqlgljhKPclrksxJJmPQpvqHV"
              className="linkss"
              alt=".."
              target="blank"
            >
              bhaskarbhatt2704@gmail.com{" "}
            </Link>
          </p>
        </div>
        <div className="contact-item">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </p>
          <p>
            <Link
              to="https://github.com/bhaskarbhatt-04?tab=repositories"
              className="linkss"
              alt=".."
              target="blank"
            >
              https://github.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
