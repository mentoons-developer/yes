import React, { useEffect } from "react";
import board from "../../assets/board.png";
import know1 from "../../assets/know1.png";
import know2 from "../../assets/know2.png";
import Styles2 from "./workshops.module.scss";
import worhshop from "../../assets/worhshop.png";
import workshop1 from "../../assets/workshop1.jpg";
import workshop2 from "../../assets/workshop2.jpg";
import workshop3 from "../../assets/workshop3.jpg";
import workshop4 from "../../assets/workshop4.jpg";
import Header from "../../components/header/Header";

function Workshops() {
  return (
    <div>
      <div className={Styles2.wrapper}>
        <div className={Styles2.container}>
          <div className={`${Styles2.containerrr} `}>
            <div className={Styles2.descriptionImage}>
              <img src={worhshop} alt="" />
              <span>Workshops</span>
            </div>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              <p className={Styles2.text} style={{ width: "87%" }}>
                Welcome to Toonland workshops. All our workshops starts at just
                ₹299. Are available both online and offline.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles2.workshops}>
          <div>
            <p className={Styles2.title}>Workshop on Youtube</p>
            <img alt="" src={workshop1} />
            <p className={Styles2.register}>Register</p>
          </div>
          <div>
            <p className={Styles2.title}>Workshop on Presentation</p>
            <img alt="" src={workshop2} />
            <p className={Styles2.register}>Register</p>
          </div>
          <div>
            <p className={Styles2.title}>Workshop on Writing</p>
            <img alt="" src={workshop3} />
            <p className={Styles2.register}>Register</p>
          </div>
          <div>
            <p className={Styles2.title}>Workshop on Finance Management</p>
            <img alt="" src={workshop4} />
            <p className={Styles2.register}>Register</p>
          </div>
        </div>
        <br />
        <br />
        <form id="registeration">
          <p>Register to our workshops that improve productivity.</p>
          <div className={Styles2.inputGroup}>
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div className={Styles2.inputGroup}>
              <label>Gender</label>
              <div>
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <span htmlFor="html">Male</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <span htmlFor="css">Female</span>
                </div>
              </div>
            </div>
            <div className={Styles2.inputGroup}>
              <label>Age</label>
              <input type="number" placeholder="Age" />
            </div>
          </div>
          <div className={Styles2.inputGroup}>
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className={Styles2.inputGroup}>
            <label>Phone Number</label>
            <input type="number" placeholder="Phone Number" />
          </div>
          <div className={Styles2.inputGroup}>
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className={Styles2.inputGroup}>
            <label htmlFor="workshops">Choose the Workshop:</label>
            <select name="workshops" id="workshops">
              <option value="Music Workshop">Music Workshop</option>
              <option value="Comics Workshop">Comics Workshop</option>
              <option value="YouTube Workshop">YouTube Workshop</option>
              <option value="Presentation Workshop">
                Presentation Workshop
              </option>
              <option value="Writing Workshop">Writing Workshop</option>
              <option value="Finance Management Workshop">
                Finance Management Workshop
              </option>
            </select>
          </div>
          <button> ★ Register</button>
        </form>
      </div>
    </div>
  );
}

export default Workshops;
