import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import audioStories from "../../assets/audio-stories.png";
import board from "../../assets/board.png";
import Header from "../../components/header/Header";
import Styles2 from "./audioStories.module.scss";

function AudioStories() {
  return (
    <div>
      {/*<div>
        hello
        <br />
        hello
        <br />
        hello
        <br />
        hello
      </div>*/}
      <div className={Styles2.wrapper}>
        <div className={Styles2.container}>
          <div className={`${Styles2.containerrr} `}>
            <div className={Styles2.descriptionImage}>
              <img src={audioStories} alt="" />
              <span>audioStories</span>
            </div>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              <p className={Styles2.text} style={{ width: "87%" }}>
                Characters based on the Nine Human Intelligences. Moral stories
                that inspire children to be less phone dependent. Watch your
                children make genuine friends.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles2.audiosamples}>
          <h3>Listen to our free AudioStoires</h3>
          <div>
            <p>Don’t share your OTP</p>
            <audio controls></audio>
          </div>
          <div>
            <p>Mobile deaddiction</p>
            <audio controls></audio>
          </div>
          <div>
            <p>Audio stories 3</p>
            <audio controls></audio>
          </div>
          <div>
            <p>Audio stories 4</p>
            <audio controls></audio>
          </div>
          <div>
            <p>Audio stories 5</p>
            <audio controls></audio>
          </div>
          <div className={Styles2.subscribe}>
            <p>
              Subscribe to our premium or pro packages to listen to our
              exclusive Audio stories
            </p>
            <Link to="/plans">
              <button>★ Subscribe</button>
            </Link>
          </div>
        </div>
        <div className={Styles2.submitForm}>
          <form>
            <p>Submit your own Audio stories and win prizes</p>
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
                    <label htmlFor="html">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label htmlFor="css">Female</label>
                  </div>
                  {/*<div>
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                  <label htmlFor="javascript">JavaScript</label>
                </div>*/}
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AudioStories;
