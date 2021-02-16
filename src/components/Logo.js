import nhlLogo from "../assets/logos/nhl.svg";
import { Link } from "react-router-dom";

import React from "react";

const Logo = () => {
  return (
    <Link to="/">
      <img src={nhlLogo} alt="NHL Logo" width="60px"></img>
    </Link>
  );
};

export default Logo;
