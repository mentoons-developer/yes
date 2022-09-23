import React, { useEffect, useState } from "react";

const Header = () => {
  // on render, set listener

  const classes = `header-section d-none d-xl-block ${sticky}`;

  return (
    <>
      <header className={classes}>..add header code</header>
    </>
  );
};

export default Header;
