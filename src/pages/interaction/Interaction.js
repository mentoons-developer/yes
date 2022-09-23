import React, { useEffect, useRef } from "react";
import Styles2 from "./interaction.module.scss";
import board from "../../assets/board.png";
import prize from "../../assets/prize.png";
import fifi from "../../assets/fifi1.png";
import contests from "../../assets/contests.png";
import interact from "../../assets/interact.png";
import schools from "../../assets/schools.png";
import auditions from "../../assets/auditions.png";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

function Interaction() {
  const headerRef = useRef(null);

  // useEffect(() => {
  //   if (window.scrollHeight > 1000) {
  //     headerRef.current.style.display = "grid";
  //   } else if (window.scrollHeight < 1000) {
  //     headerRef.current.style.display = "none";
  //   }
  // });

  return (
    <div>
      <div className={Styles2.wrapper}>
        <div ref={headerRef} className={Styles2.header}>
          <img src={schools} alt="" />
          <img src={interact} alt="" />
          <img src={auditions} alt="" />
          <img src={contests} alt="" />
        </div>

        <div className={Styles2.container}>
          <div className={`${Styles2.containerrr} `}>
            <div className={Styles2.descriptionImage}>
              <img src={fifi} alt="" />
              <span>Fun & Interaction</span>
            </div>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              {/*<img className={Styles2.narrateButton} src={narrateButton} alt="" />*/}
              <p className={Styles2.text} style={{ width: "87%" }}>
                Welcome to our fun and interaction page. Here, parents can
                interact and become friends withotherparents. Even kids can
                connect and make friends.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles2.menu}>
          <a href="#sac">
            <img src={schools} alt="" />
            <p>Schools & Colleges</p>
          </a>
          <Link to="/interactWithUs">
            <img src={interact} alt="" />
            <p>Interact with us</p>
          </Link>
          <a href="#ans">
            <img src={auditions} alt="" />
            <p>Auditions & Selections</p>
          </a>
          <a href="#eoc">
            <img src={contests} alt="" />
            <p>Enter our Contests</p>
          </a>
        </div>

        <br />
        <br />

        <div id="eoc" className={Styles2.prize}>
          <p className={Styles2.title}>Enter our contests</p>
          <p>
            We conduct weekly contests on quiz, characters of Toonland. Join our
            contents and win prizes.
          </p>
          <img src={prize} alt="" />
        </div>

        <br />
        <br />

        <div id="ans" className={Styles2.list}>
          <p className={Styles2.title}>Auditions and Selections</p>
          <p>
            We will be conducting auditions for kids between 6-12 years on
            topics such as
          </p>
          <ul className={Styles2.auditionslist}>
            <li>Storytelling / Talkshows. </li>
            <li>Singing.</li>
            <li>Guitar playing.</li>
            <li>Voice overs.</li>
            <li>Any instrument playing. </li>
            <li>Dancing.</li>
            <li>Drawing.</li>
            <li>Cooking.</li>
            <li>Acting / Drama.</li>
            <li>Story and poem writing. </li>
            <li>Mimicry.</li>
            <li>Sport, Yoga etc.</li>
            {/*<li> ● Any other special skills.</li>*/}
          </ul>
          <button>Register for contest</button>
        </div>

        <br />
        <br />

        <div id="sac" className={Styles2.list}>
          <p className={Styles2.title}>Schools and colleges</p>
          <p>
            We wish to bring our innovative and productive workshops as far and
            wide as possible.
          </p>
        </div>

        <div className={Styles2.submitForm}>
          <form>
            <p>
              If you represent any school, you can just submit the form below.
            </p>
            <div className={Styles2.inputGroup}>
              <label>Name of School/College</label>
              <input type="text" placeholder="Name of School/College" />
            </div>
            <div className={Styles2.inputGroup}>
              <label>Designation</label>
              <input type="text" placeholder="Designation" />
            </div>
            <div className={Styles2.inputGroup}>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className={Styles2.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
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

export default Interaction;
