import React from "react";
import Styles from "./home_following.module.scss";
import rock from "../../assets/rock.png";
import rock2 from "../../assets/rock2.png";
import rock3 from "../../assets/rock3.png";
import meerkat from "../../assets/meerkat2.png";
import treeTrunk from "../../assets/tree_trunk.png";
import libraryTree from "../../assets/libraryTree.png";
import boardLong from "../../assets/longBoard.png";
import board from "../../assets/board.png";

import video1 from "../../assets/video1.png";
import video2 from "../../assets/video2.png";
import kumaLibrary from "../../assets/kumaLibrary.png";
import mallChar from "../../assets/mallChar.png";
import narrateButton from "../../assets/play.png";
import illuButton from "../../assets/illu-button.png";
import thankyou from "../../assets/thankyou.png";

import library from "../../assets/library2.png";
import theatre from "../../assets/theatre.png";
import mall from "../../assets/mall.png";
import comingsoon from "../../assets/comingsoon.png";

import theatre_new from "../../assets/theatre_new.png";
import library_new from "../../assets/library_new.png";
import theatre_neww from "../../assets/theaterChar.png";
import merch from "../../assets/merch.png";
import ticket from "../../assets/ticket.png";
import FooterComp from "../footer/Footer";
import { Link } from "react-router-dom";

// import ticket from "../../assets/ticket.png";

// import rock4 from "../../assets/rock4.png";
// import rock2 from "../../assets/rock2.png";

function Homefollowing() {
  return (
    <div>
      <div className={Styles.pg5}>
        <img src={rock} alt="" />
        <img className={Styles.rock2} src={rock2} alt="" />
        <img src={rock3} alt="" />
        <img className={Styles.meerkat} src={meerkat} alt="" />
      </div>
      <div className={Styles.library}>
        <img className={Styles.libraryTree} src={libraryTree} alt="" />
      </div>

      <div className={Styles.libraryTheater}>
        <div className={Styles.new_section2}>
          <img className={Styles.theatre_new} src={theatre_new} alt="" />
          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <img src={theatre_neww} alt="" />
              {/*<span style={{ marginTop: "-10%" }}>Theatre</span>*/}
            </div>
            <Link to="/theatre">
              <img src={ticket} alt="" className={Styles.tickett} />
            </Link>
            {/*<p className={Styles.ticketext}>Click Ticket to enter</p>*/}
          </div>
        </div>

        <div className={Styles.new_section}>
          <img className={Styles.library_new} src={library_new} alt="" />
          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <Link to="/library">
                <img src={kumaLibrary} alt="" />
              </Link>
              <span style={{ marginTop: "-10%" }}>Toon Library</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <div className={Styles.gridy}>
              {/*<img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />*/}
              <p>Get basics-to-know Knowledge cards @ just ₹99</p>
            </div>

            <div>
              <Link to="/library">
                <p className={Styles.freeSampleText}>Enter</p>
              </Link>
              <img className={Styles.illuButton} src={illuButton} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.commonBG}>
        <div className={Styles.mallSection}>
          <img className={Styles.mall} src={mall} alt="" />

          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <Link to="/mall">
                <img src={mallChar} alt="" />
              </Link>
              <span style={{ marginTop: "-10%" }}>Toon Mall</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <div className={Styles.gridy}>
              {/*<p>Refer a friend</p>
              <p>Audio Stories</p>
              <p>Illus Movies</p>
              <p>Comics</p>
              <img src={merch} alt="" />
              */}
              <p>
                Buy - Comics, Knowledge cards, Audio stories & Toonland Movies.
              </p>
            </div>
            {/*<div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text} style={{ width: "70%" }}>
                Get basics-to-know Knowledge cards @ ₹99
              </p>
            </div>*/}

            <div>
              <Link to="/mall">
                <p className={Styles.freeSampleText}>explore</p>
              </Link>
              <img className={Styles.illuButton} src={illuButton} alt="" />
            </div>
          </div>
        </div>
        <div className={Styles.bottom}>
          <img src={thankyou} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homefollowing;

// <div className={Styles.comingsoon}>
//   <img src={comingsoon} alt="" />
// </div>
// <div className={Styles.treeTrunkContainer}>
//   <img className={Styles.treeTrunk} src={treeTrunk} alt="" />
//   <img className={Styles.libraryImg} src={library} alt="" />
//   <img className={Styles.theatre} src={theatre} alt="" />
//   <div>

//     <img className={Styles.video1} src={video1} alt="" />
//     <img className={Styles.video2} src={video2} alt="" />
//     <img
//       style={{ display: "none" }}
//       className={Styles.video2}
//       src={video2}
//       alt=""
//     />
//     <img
//       style={{ display: "none" }}
//       className={Styles.video2}
//       src={video2}
//       alt=""
//     />
//   </div>
// </div>;

// <Link to="/theatre">
//   <button className={Styles.freeSampleText}>Visit Theater</button>
// </Link>;
