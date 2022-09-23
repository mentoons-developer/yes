import React from "react";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";
import socialmedia from "../../assets/socialmedia.png";
import feedback from "../../assets/feedback.png";

import Styles from "./footer.module.scss";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <div>
      <div className={Styles.container}>
        <img src={logo} alt="" className={Styles.logo} />
        <div>
          <ul className={Styles.asd1}>
            <li>
              <p>Subscribe to Toon News</p>
              <div className={Styles.toonnews}>
                <input placeholder="Enter your Email ID" />
                <span>Enter</span>
              </div>
            </li>
            <li>
              <p>Write your Feedback</p>
              <div className={Styles.textare}>
                <textarea placeholder="Write your feedback.." />
                <button>Submit</button>
              </div>
            </li>
            <li>
              <Link to="/interaction">
                <p> Fun & Interaction</p>
              </Link>
            </li>
            <li>
              <p> Our Team</p>
            </li>
            <li>
              <Link to="/careers">
                <p> Careers</p>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <p> FAQ</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className={Styles.socialmedia}>
          <div className={Styles.list}>
            <div>
              <img src={whatsapp} alt="" />
              <p>Whatsapp</p>
            </div>
            <div>
              <img src={instagram} alt="" />
              <p>Instagram</p>
            </div>
            <div>
              <img src={youtube} alt="" />
              <p>YouTube</p>
            </div>
            <div>
              <img src={facebook} alt="" />
              <p>Facebook</p>
            </div>
          </div>
          <div className={Styles.smboard}>
            <img src={socialmedia} alt="" />
          </div>
        </div>
        <br />

        {/*<div className={Styles.feedback}>
          <div className={Styles.form}>
            <form>
              <input />
              <input />
              <button>submit</button>
            </form>
          </div>
          <div className={Styles.smboard}>
            <img src={feedback} alt="" />
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default FooterComp;
// <li>Home</li>
//         <li>Products</li>
//         <li>About Us</li>
//         <li>Contact</li>
