import React, { useEffect } from "react";
import ticket from "../../assets/ticket.png";
import Styles from "./theatre.module.scss";
import lulu from "../../assets/lulu.png";
import theatre from "../../assets/theaterChar.png";
import board from "../../assets/theatrebg.png";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

function Theatre() {
  return (
    <div>
      <div className={Styles.ticket}>
        <img src={ticket} alt="" />
      </div>
      <div className={Styles.animWait}>
        <div className={Styles.container}>
          <div id="dumm" className={`${Styles.containerrr} `}>
            <div className={Styles.descriptionImage}>
              <img src={theatre} alt="" />
              <span className={Styles.span}>Theatre</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <div>
              {/*<img className={Styles.narrateButton} src={narrateButton} alt="" />*/}
              <p className={Styles.text} style={{ width: "87%" }}>
                Watch & enjoy videos on our Team, Bloopers, Trailers, Short
                films and Music videos.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className={Styles.videoSamples}>
          <span className={Styles.span2}>Upcoming releases and videos.</span>
          <iframe
            src="https://www.youtube.com/embed/_9ibEA3AqDo"
            title="YouTube video player"
          ></iframe>
        </div>
        <br />
        <br />
        <br />

        <div className={Styles.videoSamples}>
          <span className={Styles.span2}>Making of Toonland video.</span>
          <iframe
            src="https://www.youtube.com/embed/_9ibEA3AqDo"
            title="YouTube video player"
          ></iframe>
        </div>
        <br />
        <br />
        <div className={Styles.subscribe}>
          <p>
            Subscribe to our premium or pro packages to watch our exclusive
            Theatre Videos below.
          </p>

          <ul>
            <li>
              Watch trailers, short <br /> films & music videos
            </li>
            <li>Bloopers</li>
            <li>Behind the scenes</li>
            <li>Our Team videos.</li>
            <li>Team birthday celebrations </li>
            <li>Mall visits of Team</li>
            <li>Employee farewells</li>
            <li>40 seconds product ads.</li>
          </ul>
          <Link to="/plans">
            <button>★ Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Theatre;
