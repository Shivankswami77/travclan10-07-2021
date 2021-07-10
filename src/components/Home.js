import React from "react";
import "./Home.css";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__page">
      <h1>
        TravClan Assignment
        <br />
        Submitted By :- Shvank Swami
      </h1>
      <Link style={{ textDecoration: "none" }} to="/customerbids">
        <Button style={{ color: "#6E3E8B" }} variant="contained">
          <HomeIcon />
          Sign in
        </Button>
      </Link>
    </div>
  );
};

export default Home;
