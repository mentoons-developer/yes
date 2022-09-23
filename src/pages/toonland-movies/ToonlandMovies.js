import React, { useEffect } from "react";
import audioStories from "../../assets/audio-stories.png";
import board from "../../assets/board.png";
import Styles2 from "./toonlandmovies.module.scss";
import illustratedStories from "../../assets/illustrated-stories.png";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

function ToonlandMovies() {
  return (
    <div>
      <div className={Styles2.wrapper}>
        <div className={Styles2.container}>
          <div className={`${Styles2.containerrr} `}>
            <div className={Styles2.descriptionImage}>
              <img src={illustratedStories} alt="" />
              <span>Toonland Movies</span>
            </div>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              <p className={Styles2.text} style={{ width: "87%" }}>
                Our 18 characters will take you through a series of stories
                which involves friendship, dependency, peace between neighbours,
                emotions, love, caring, sharing, and overcoming jealousy.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles2.des}>
          <p>
            Our illustrated stories are based on an imaginary place named
            Toonland.
          </p>
          <p>
            All our characters are based on the “Nine Human Intelligence
            theory”.
          </p>
        </div>

        <div className={Styles2.iframe}>
          <p>Watch our free Toonland Movies.</p>
          {/*  <div>
            <iframe
              src="https://www.youtube.com/embed/LG8brAlJXpk"
              title="YouTube video player"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/LG8brAlJXpk"
              title="YouTube video player"
            ></iframe>
        </div>*/}
          <div>
            <iframe
              src="https://www.youtube.com/embed/LG8brAlJXpk"
              title="YouTube video player"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/LG8brAlJXpk"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        <div className={Styles2.subscribe}>
          <p>
            Subscribe to our premium or pro packages to listen to our exclusive
            Toonland Movies.
          </p>
          <Link to="/plans">
            <button>★ Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ToonlandMovies;
