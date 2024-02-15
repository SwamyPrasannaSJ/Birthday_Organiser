import React from "react";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";

import img1 from "../assets/images/couple_celeb.jpg";
import Card from "../components/CCard";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <div className="home-container">
        <img id="homeimg1" src={img1} alt="" />
        <h1 className="text">HappyBash Planners</h1>
        <p id="p1" onClick={() => navigate("/about")}>
          Get In Touch
        </p>
      </div>
      <div className="sub1-container">
        <h2 id="subscribe"> Crafting memories, one birthday at a time!</h2>
        <p>
          <i >
            Your special day, our expert touch – HappyBash, where celebrations
            mean everything!
          </i>
        </p>
      </div>
      <div className="hevents">
        <h1>SOME OF OUR WORKS</h1>
        <p>
          <i>
            Elevating moments, transforming events – HappyBash Planners, where
            every detail is a masterpiece.
          </i>
        </p>
      </div>

      <Card />
      <Footer />
    </div>
  );
}

export default Home;
