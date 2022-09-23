import React from "react";
import Styles from "../home/home.module.scss";
import lulu from "../../assets/lulu.png";
import board from "../../assets/board.png";
import illuButton from "../../assets/illu-button.png";
import narrateButton from "../../assets/play.png";
import Styles2 from "./music.module.scss";
import Header from "../../components/header/Header";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Music() {
  return (
    <div className={Styles2.wrapper}>
      <div className={Styles2.container}>
        <div className={`${Styles2.containerrr} `}>
          <div className={Styles2.descriptionImage}>
            <img src={lulu} alt="" />
            <p className={Styles2.title}>Toonland Music</p>
          </div>
          <img className={Styles2.board} src={board} alt="" />
          <div>
            {/*<img className={Styles2.narrateButton} src={narrateButton} alt="" />*/}
            <p className={Styles2.text} style={{ width: "87%" }}>
              Our exclusive music of Toonland will be available for sale @ 99
              Rs. Get songs about Toonland characters, background music, etc
            </p>
          </div>
          {/*<div>
            <img className={Styles2.freeSample} alt="" />
            <p className={Styles2.freeSampleText}>Free listen</p>
            <img className={Styles2.illuButton} src={illuButton} alt="" />
          </div>

          <div>
            <img className={Styles2.illuButton2} src={illuButton} alt="" />
            <button className={Styles2.illuButton2Text}>Buy more</button>
          </div>*/}
        </div>
      </div>
      <div className={Styles2.audiosamples}>
        <h3>listen to our free Toonland music</h3>
        <div>
          <p>Music for concentration</p>
          <audio controls></audio>
        </div>
        <div>
          <p>Study music</p>
          <audio controls></audio>
        </div>
        <div>
          <p>Study music 3</p>
          <audio controls></audio>
        </div>
        <div>
          <p>Study music 4</p>
          <audio controls></audio>
        </div>
        <div>
          <p>Study music 5</p>
          <audio controls></audio>
        </div>
        <div className={Styles2.subscribe}>
          <p>
            Subscribe to our premium or pro packages to listen to our exclusive
            Toonland music
          </p>
          <Link to="/plans">
            <button>★ Subscribe</button>
          </Link>
        </div>
      </div>
      <div className={Styles2.musicWorkshop}>
        <p style={{ textAlign: "center" }}>
          Interested in our Music workshops? Introducing music workshops.
          <br />
          <br />
          Children can attend our workshop on “How to make their own Music” and
          release their album/single.
        </p>
        <HashLink to="/workshops">
          <button>Join our workshops</button>
        </HashLink>
      </div>
    </div>
  );
}

export default Music;
