import React from "react";
// import Styles from "../home/home.module.scss";
import Styles2 from "./comics.module.scss";
import stellaBella from "../../assets/stella_bella.png";
import board from "../../assets/board.png";
import narrateButton from "../../assets/play.png";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Comics() {
  return (
    <div>
      <div className={Styles2.wrapper}>
        <div className={Styles2.container}>
          <div className={`${Styles2.containerrr} `}>
            <div className={Styles2.descriptionImage}>
              <img src={stellaBella} alt="" />
              <span>Comics</span>
            </div>
            <img className={Styles2.board} src={board} alt="" />

            <div>
              <img className={Styles2.narrateButton} alt="" />
              <p className={Styles2.text}>
                We are launching 100 comics series for kids aged between 6 to 12
                years. Our comics are downloadable in Pdf format. Just download,
                print and make your own comic book
              </p>
            </div>
          </div>
        </div>

        <div className={Styles2.cony}>
          <div className={`${Styles2.containerrr2} `}>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              <button className={Styles2.illuButton2Text}>Free Download</button>
            </div>
            <p className={Styles2.title}>make own comic</p>

            <div>
              <p className={Styles2.text}>
                By downloading this, you will be able to create any comic of
                your own choice
              </p>
            </div>
          </div>
        </div>

        <div className={Styles2.cony}>
          <div className={`${Styles2.containerrr2} `}>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              <button className={Styles2.illuButton2Text}>Buy Now</button>
            </div>
            <p className={Styles2.title}>make comic book</p>
            <div>
              <p className={Styles2.text}>
                "How to make your own comic book” - Pay and download @ 49
                Rupees.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles2.comicsWork}>
          <p>
            Workshops on “How to make comic books” - 2 days workshop @ 699
            Rupees.
          </p>
          <p>
            If you are unable to attend our workshops, download the Comic above
            at ₹49
          </p>
          <HashLink to="/workshops">
            <button>Register</button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Comics;
