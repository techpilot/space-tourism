import React  from "react"
import "./Nav.css"
import logo from "../images/Path.png"
import {useNavigate} from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate()

  return (
    <div className="nav">
      <div className="nav__contents">
        <div className="nav__logos">
          <img src={logo} alt="" className="nav__logo"/>
        </div>

        <div className="nav__tabs">
          <p ></p>
          <div id="nav__home">
            <div
              id="nav__homeId"
              onClick={() => navigate("/")}
            >
              <p className="nav__home1">00</p>
              <p className="nav__home">HOME</p>
            </div>
          </div>

          <div id="nav__des">
            <div
              id="nav__desId"
              onClick={() => navigate("/destinations")}
            >
              <p className="nav__des1">01</p>
              <p className="nav__des">DESTINATION</p>
            </div>
          </div>

          <div id="nav__crew">
            <div
              id="nav__crewId"
              onClick={() => navigate("/crew")}
            >
              <p className="nav__crew1">02</p>
              <p className="nav__crew">CREW</p>
            </div>
          </div>

          <div id="nav__tech">
            <div id="nav__techId">
              <p className="nav__tech1">03</p>
              <p className="nav__tech">TECHNOLOGY</p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Nav