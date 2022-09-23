import React, { useEffect, useRef, useState } from "react";
import Styles from "./home.module.scss";

import audioStories from "../../assets/audio-stories.png";
import illustratedStories from "../../assets/illustrated-stories.png";
import stellaBella from "../../assets/stella_bella.png";
import worhshop from "../../assets/worhshop.png";
import lulu from "../../assets/lulu.png";

import faq from "../../assets/faq.png";

import bgMusic from "../../assets/toonlandmusic.mpeg";

import charactersWalking from "../../assets/characters_walking.png";
import top_branch from "../../assets/top_branch.png";
import ngina from "../../assets/ngina.png";
import logo from "../../assets/logo.png";
import green_left from "../../assets/green-left.png";
import green_right from "../../assets/green-right.png";

import pauseBtn from "../../assets/pause.png";
import playBtn from "../../assets/play.png";

import pg2_newbg_right from "../../assets/pg2_newbg_right.png";
import pg2_newbg_left from "../../assets/pg2_newbg_left.png";

import whatsapp from "../../assets/whatsapp.png";
import members from "../../assets/members.png";
import membership from "../../assets/membership.png";
import table from "../../assets/table.png";
import Homefollowing from "../Home_following/Home_following";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Home() {
  // useEffect(() => {
  //   if (location.pathname === "/home") {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });

  //     const body = document.querySelector("body");
  //     body.style.overflowY = "hidden";
  //   }
  // }, [location.pathname]);

  const videoDialogRef = useRef();
  const [show, setShow] = useState(true);

  const handleShowVideo = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (show) {
      videoDialogRef.current.style.display = "none";
    } else {
      videoDialogRef.current.style.display = "grid";
    }
  }, [show]);

  const moreContentRef = useRef();
  const [showMoreContent, setShowMoreContent] = useState(false);

  const handleMoreContent = () => {
    setShowMoreContent((prev) => !prev);
  };

  const handleMembershipRef = useRef();
  const [showMmbrshp, setShowMmbrshp] = useState(true);

  const handleMembership = () => {
    setShowMmbrshp((prev) => !prev);
  };

  useEffect(() => {
    if (showMmbrshp) {
      handleMembershipRef.current.style.display = "none";
    } else {
      handleMembershipRef.current.style.display = "grid";
    }
  }, [showMmbrshp]);

  const pg2Ref = useRef(null);
  const btnRef = useRef(null);
  // useEffect(() => {
  //   btnRef.current.addEventListener(
  //     "click",
  //     () => {
  //       if (window.matchMedia("(max-width: 480px)").matches) {
  //         window.scrollTo({
  //           top: pg2Ref.current.offsetHeight - 190,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         window.scrollTo({
  //           top: pg2Ref.current.offsetHeight + 300,
  //           behavior: "smooth",
  //         });
  //       }
  //     },
  //     []
  //   );
  // });

  // all usestate for audios

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = (event) => {
    setPlaying((prev) => !prev);
    bgMusicRef.current.play();
    setPlayBgMusic(true);

    const body = document.querySelector("body");
    body.style.overflowY = "scroll";
  };

  const homeVideoRef = useRef(null);
  useEffect(() => {
    homeVideoRef.current.addEventListener("playing", () => {
      setPlaying(false);
    });
  }, [playing]);

  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset >= 500) {
  //     homeVideoRef.current.pause();
  //   }
  // });

  const bgMusicImgRef = useRef(null);

  const bgMusicRef = useRef(null);

  const [playBgMusic, setPlayBgMusic] = useState(false);

  const videohandleClick = () => {
    setPlayBgMusic(false);
  };

  useEffect(() => {
    homeVideoRef.current.addEventListener("playing", () => {
      setPlayBgMusic(false);
    });
  }, []);

  const handleClickBgMusic = () => {
    setPlayBgMusic((prev) => !prev);

    homeVideoRef.current.pause();
  };

  useEffect(() => {
    if (playBgMusic) {
      bgMusicRef.current.play();
      bgMusicImgRef.current.src = pauseBtn;
    } else {
      bgMusicRef.current.pause();
      bgMusicImgRef.current.src = playBtn;
    }
  }, [playBgMusic]);

  return (
    <div>
      <div>
        <img
          style={{
            position: "fixed",
            cursor: "pointer",
            zIndex: "99",
            maxWidth: "3rem",
            borderRadius: "50%",
            background: "white",
            padding: "0.4rem",
            bottom: 10,
            right: 10,
          }}
          onClick={handleClickBgMusic}
          ref={bgMusicImgRef}
          alt=""
        />
      </div>
      <div className={Styles.toolbar}>
        <div className={Styles.tooltip}>
          <img src={members} alt="" />
          <span>Add friends</span>
        </div>
        <div className={Styles.tooltip}>
          <Link to="/plans">
            <img src={membership} alt="" />
          </Link>
          <span>Membership</span>
        </div>
        <div className={Styles.tooltip}>
          <a
            href="https://chat.whatsapp.com/BDizk4Ll2fw83pE7aLOvzY"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="" />
            <span>Join Group</span>
          </a>
        </div>
        <div className={Styles.tooltip}>
          <Link to="/faq">
            <img src={faq} alt="" />
          </Link>
          <span>FAQ</span>
        </div>
      </div>
      <div className={Styles.curtain}>
        <div className={Styles.left}></div>
        <div className={Styles.right}></div>
      </div>
      <div className={Styles.pg1_new}>
        <button ref={btnRef} onClick={handleClick}>
          Continue to Toonland
        </button>
        {/*<img className={Styles.bg1_new} src={bg1_new} alt="" />*/}
        <img className={Styles.logo} src={logo} alt="" />
        <img className={Styles.green_left} src={green_left} alt="" />
        <img className={Styles.green_right} src={green_right} alt="" />

        <video onClick={videohandleClick} ref={homeVideoRef} controls>
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fhome_video.MP4?alt=media&token=4fec2b07-3a02-4e9c-bce4-6185a8689d49"
          />
        </video>
        <img className={Styles.top_branch} src={top_branch} alt="" />
        <img
          className={Styles.charactersWalking}
          src={charactersWalking}
          alt=""
        />
        <img className={Styles.ngina} src={ngina} alt="" />
      </div>

      <div className={Styles.menu}>
        <div className={Styles.what}>
          <span className={Styles.title}>What is Toonland?</span>
          <br />
          <br />
          <p>
            Toonland is an imaginary place where we have characters based on the
            9 intelligencestheory. All stories are about friendship, love,
            bonding, sharing, caring, gratitude, and learning.
          </p>
        </div>
        <div className={Styles.what}>
          <span className={Styles.title}>Why we Started it?</span>
          <br />
          <br />
          <p>
            Excessive usage of cell phones among children has led to a time
            where pen, pencil, paper and eraser have little value. In a few
            years, gadgets will take over writing habits and autocorrect will
            ensure that kids don’t remember spellings.{" "}
            <span
              style={{ textDecoration: "underline", color: "blue" }}
              onClick={handleMoreContent}
            >
              More
            </span>
          </p>
        </div>
        <img className={Styles.bg} src={pg2_newbg_right} alt="" />
        <img className={Styles.bg2} src={pg2_newbg_left} alt="" />
        <div className={Styles.cardd}>
          <span className={Styles.title}>Audio Stories</span>
          <Link to="/audiostory">
            <img src={audioStories} alt="" />
          </Link>
          <span>To keep kids safe from social media, internet and gadgets</span>
        </div>
        <div className={Styles.cardd}>
          <span className={Styles.title}>Comics</span>
          <Link to="/comics">
            <img src={stellaBella} alt="" />
          </Link>
          <span>
            Stories are about bonding, friendship, sharing, caring, and high
            moral values
          </span>
        </div>
        <div className={Styles.cardd}>
          <span className={Styles.title}>Toonland Movies</span>
          <Link to="/toonlandmovies">
            <img src={illustratedStories} alt="" />
          </Link>
          <span>
            Comes with beautifully composed music, amazing & easy to understand
            illustrations
          </span>
        </div>
        <div className={Styles.cardd}>
          <span className={Styles.title}>Workshops</span>
          <Link to="/workshops">
            <img src={worhshop} alt="" />
          </Link>
          <span>Workshops that improve productivity</span>
        </div>

        <div className={Styles.cardd}>
          <span className={Styles.title}>Toonland Music</span>
          <Link to="/music">
            <img src={lulu} alt="" className={Styles.lulu} />
          </Link>
          <span>Toonland music will be a journey for young kids.</span>
        </div>

        <div style={{ justifyContent: "center" }} className={Styles.cardd}>
          <span className={Styles.title}>Coming Soon</span>
        </div>
      </div>

      <div className={Styles.videoDialog} ref={videoDialogRef}>
        <video controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fhome_video.MP4?alt=media&token=4fec2b07-3a02-4e9c-bce4-6185a8689d49"
            type="video/mp4"
          />
        </video>
        <button onClick={handleShowVideo}>Close</button>
      </div>
      <div ref={handleMembershipRef} className={Styles.membershipDialog}>
        <img src={table} alt="" />
        <a href={table}>
          <button>Download</button>
        </a>
        <h1 onClick={handleMembership}>X</h1>
      </div>

      <div ref={moreContentRef} className={Styles.moreContent}>
        <div className={showMoreContent ? Styles.showMore : Styles.hideMore}>
          <div className={Styles.content}>
            <p style={{ color: "blue" }} onClick={handleMoreContent}>
              Why we started Toonland ?
            </p>
            <p>
              Excessive usage of cell phones among children has led to a time
              where pen, pencil, paper and eraser have little value. In a few
              years, gadgets will take over writing habits and autocorrect will
              ensure that kids don’t remember spellings.{" "}
            </p>
            <p>
              Our efforts are to revive old school methodology of learning like
              comics, knowledge based cards, beautiful music, a platform to
              interact with other kids.
            </p>
            <p>
              Our vision is to keep the kids occupied with great stories with
              morals. Since modern days stories are filled with violence and
              unacceptable language.
            </p>
            <p>
              As a parent, if you also feel the same, come and join us to create
              a less cell phone and gadget dependability. Let&#39;s bring more
              knowledge than fashionability.
            </p>
            <p>
              Write to us at <a href="/"> mahesh@mentoons.com</a>
            </p>
            <p style={{ color: "red" }} onClick={handleMoreContent}>
              Close
            </p>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={bgMusic}></audio>
      <audio loop ref={bgMusicRef} src={bgMusic}></audio>
      <Homefollowing />
    </div>
  );
}

export default Home;

// <div className={Styles.tooltip}>
//           <img src={membership} alt="" onClick={handleMembership} />
//           <span>Membership</span>
//         </div>
