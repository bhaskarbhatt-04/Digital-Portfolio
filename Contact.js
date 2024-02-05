import React, { useState } from "react";
import gmail from "./Photos/gmail.png";
import linkd from "./Photos/linkd.png";
import insta from "./Photos/insta.png";
import github from "./Photos/githb.png";
import "./Contact.css";
import { Link } from "react-router-dom";
import giphy from "./Photos/pngn.gif";
import axios from "axios";

export default function Contact() {

  const [text, setText] = useState("Enter your name");
  const [mail, setMail] = useState("Enter your ID");
  const [msg, setMsg] = useState("Enter the message");

  const handleNameChange = (event) => {
    setText(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMsg(event.target.value);
  };

  const handleNameFocus = () => {
    if (text === "Enter your name") {
      setText("");
    }
  };

  const handleMailFocus = () => {
    if (mail === "Enter your ID") {
      setMail("");
    }
  };

  const handleMsgFocus = () => {
    if (msg === "Enter the message") {
      setMsg("");
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      name: text,
      email: mail,
      message: msg,
    };

    try {
      const endpoint = 'http://localhost:5000/api/contact'; // Your localhost API endpoint
      const response = await axios.post(endpoint, formData);
      console.log("Data sent to localhost server:", response.data);
      // Handle success or perform actions based on the response
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error
    }console.log("Form Data:", formData);
  };

  return (
    <div className="cntct">
      <img
        src={giphy}
        className="giphy"
        alt=".."
        height={200}
        width={200}
      ></img>
      <div className="top-h">
        <div className="left">
          <Link
            to="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKkNDghwKPhGjkwRdCfTWfMCSpdJccdspmzkkLnfQdVqlgljhKPclrksxJJmPQpvqHV"
            alt=".."
            target="blank"
          >
            <img src={gmail} alt=".." height={40} width={40} className="img23"></img>
          </Link>
          <Link
            to="https://www.linkedin.com/in/bhaskar-bhatt-b211a1217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
            
          >
            <img src={linkd} alt=".." height={40} width={40} className="img45"></img>
          </Link>
          <Link
            to="https://instagram.com/bhaskar._.04?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
            target="blank"
            
          >
            <img src={insta} alt=".." height={40} width={40} className="img67"></img>
          </Link>
          <Link
            to="https://github.com/bhaskarbhatt-04?tab=repositories"
            alt=".."
            target="blank"
            
          >
            {" "}
            <img src={github} alt=".." height={40} width={40} className="img89"></img>
          </Link>
        </div>
        <div className="right">
          <form onSubmit={handleFormSubmit} id="cntct" name="contact-form">
            <div className="fname">
              <label htmlFor="name-box">Name</label>
              <p>
                <textarea
                  type="text"
                  rows={1}
                  className="nm-bx1"
                  onChange={handleNameChange}
                  onFocus={handleNameFocus}
                  value={text}
                ></textarea>
              </p>
            </div>

            <div className="gmailof">
              <label htmlFor="name-box">Gmail</label>
              <p>
                <textarea
                  type="text"
                  rows={1}
                  className="nm-bx2"
                  onChange={handleMailChange}
                  onFocus={handleMailFocus}
                  value={mail}
                ></textarea>
              </p>
            </div>
            <div className="msg">
              <label htmlFor="name-box">Message</label>
              <p>
                <textarea
                  type="text"
                  rows={10}
                  className="nm-bx3"
                  onChange={handleMessageChange}
                  onFocus={handleMsgFocus}
                  value={msg}
                ></textarea>
              </p>
            </div>
            <div className="btnsnd">
            <button type="submit" className="btn btn-success">
              Send
            </button>
          </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}
