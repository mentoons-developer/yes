import React, { useEffect, useRef, useState } from "react";
import Styles from "./header.module.scss";
import left from "../../assets/home.png";
import info from "../../assets/information.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [style, setStyle] = useState(null);

  const headerRef = useRef();

  const scrollListen = () => {
    if (window.scrollY > headerRef.current.offsetHeight) {
      setStyle(true);
    } else setStyle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListen);

    return () => {
      window.removeEventListener("scroll", scrollListen);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`${Styles.header} ${style ? Styles.ok : Styles.notok}`}
    >
      <Link to="/home">
        <img src={logo} alt="" className={Styles.logo} />
      </Link>
      <Link to="/faq">
        <img src={info} alt="" className={Styles.faq} />
      </Link>
    </div>
  );
}

export default Header;
// <img src={logo} alt="" className={Styles.logo} />;
