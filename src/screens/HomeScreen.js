import React from "react";
import "./HomeScreen.css"
import explore from "../images/Group.png";
import logo from "../images/Path.png";
import Nav from "../components/Nav";
import {useNavigate} from "react-router-dom";


const HomeScreen = () => {
  const navigate = useNavigate()

  return (
    <div className="homeScreen">
      <div className="homeScreen__background">
        <div className="homeScreen__navContents">
          <div className="homeScreen__navLogos">
            <img src={logo} alt="" className="homeScreen__navLogo"/>
          </div>

          <div className="homeScreen__navTabsBackground">
            <div className="homeScreen__navSpace"/>
            <div className="homeScreen__navTabs">
              <p ></p>
              <div id="homeScreen__home">
                <div
                  id="homeScreen__homeId"
                  onClick={() => navigate("/")}
                >
                  <p className="homeScreen__home1">00</p>
                  <p className="homeScreen__home">HOME</p>
                </div>
              </div>

              <div id="homeScreen__des">
                <div
                  id="homeScreen__desId"
                  onClick={() => navigate("/destinations")}
                >
                  <p className="homeScreen__des1">01</p>
                  <p className="homeScreen__des">DESTINATION</p>
                </div>
              </div>

              <div id="homeScreen__crew">
                <div
                  id="homeScreen__crewId"
                  onClick={() => navigate("/crew")}
                >
                  <p className="homeScreen__crew1">02</p>
                  <p className="homeScreen__crew">CREW</p>
                </div>
              </div>

              <div id="homeScreen__tech">
                <div id="homeScreen__techId">
                  <p className="homeScreen__tech1">03</p>
                  <p className="homeScreen__tech">TECHNOLOGY</p>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="homeScreen__body">
        <div className="homeScreen__writeup">
          <h3>SO, YOU WANT TO TRAVEL</h3>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge
            of it. Well sit back, and relax because we'll give you a truly
            out of this world's experience!
          </p>
        </div>

        <div className="homeScreen__image">
          <div className="homeScreen__space"></div>
          <img src={explore} alt="" className="homeScreen__pic"/>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen