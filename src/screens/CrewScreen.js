import React from "react";
import "./CrewScreen.css"
import Nav from "../components/Nav";
import crew1 from "../images/crew1.png"

const CrewScreen = () => {
  return (
    <div className="crewScreen">
      <Nav />

      <div className="crewScreen__body">
        <div className="crewScreen__details">
          <h3 className="crewScreen__title">
            02  MEET OUR CREW
          </h3>
          <div className="crewScreen__heading">
            <h4>COMMANDER</h4>
            <h2>DOUGLAS HURLEY</h2>
          </div>
          <p className="crewScreen__writeup">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and
            former NASA astronaut. He launched into space for the third time as commander
            of Crew Dragon Demo-2.
          </p>
        </div>

        <div className="crewScreen__image">
          <img src={crew1} alt="" className="crewScreen__pic"/>
        </div>
      </div>
    </div>
  )
}

export default CrewScreen