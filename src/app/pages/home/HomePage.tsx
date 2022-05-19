import * as React from "react";
import logo from "../../static/images/koala.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import "./HomePage.scss";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="logo">
        <img className="logo__image" src={logo} alt="logo" />
        <div className="logo__text-wrapper">
          <div>Travel</div>
          <div className="logo__text-part">Advisor</div>
        </div>
      </div>
      <Button
        className="home-page__btn"
        variant="outlined"
        onClick={() => navigate("/things-to-do")}
      >
        Plan your trip
      </Button>
    </div>
  );
}

export default HomePage;
