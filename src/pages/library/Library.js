import React, { useEffect } from "react";
import board from "../../assets/board.png";
import know1 from "../../assets/know1.png";
import know2 from "../../assets/know2.png";
import Styles2 from "./library.module.scss";
import worhshop from "../../assets/worhshop.png";
import Header from "../../components/header/Header";

function Library() {
  return (
    <div>
      <div className={Styles2.wrapper}>
        <div className={Styles2.container}>
          <div className={`${Styles2.containerrr} `}>
            <div className={Styles2.descriptionImage}>
              <img src={worhshop} alt="" />
              <span>Toon Library</span>
            </div>
            <img className={Styles2.board} src={board} alt="" />
            <div>
              <p className={Styles2.text} style={{ width: "87%" }}>
                We present 100 (basic-to-know) inventions which we use in our
                daily life and are completely ignorant of.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles2.des}>
          <p>
            Inventions such as matchbox, knife, glass bottle, stapler, post
            stick notes and so on.
          </p>
          <p>
            We believe that this basic knowledge has to be imparted at a very
            young age.
          </p>
        </div>

        <div className={Styles2.knows}>
          <img src={know2} alt="" />
          <p>Our free knowledge card. Click on image to download.</p>
          <div className={Styles2.imgs}>
            <img src={know1} alt="" />
            <img src={know1} alt="" />
            <img src={know1} alt="" />
          </div>
        </div>

        <div className={Styles2.subscribe}>
          <p>
            Buy all our 100 Knowledge Cards of Toonlibrary @ 99. Each card costs
            just ₹1
          </p>
          <button> ★ Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Library;
