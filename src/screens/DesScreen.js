import React from "react"
import "./DesScreen.css"
import Nav from "../components/Nav";
import moon from "../images/Bitmap.png"

const DesScreen = () => {
  return (
    <div className="desScreen">
      <Nav />
      <div className="desScreen__body">
        <div className="desScreen__heading">
          <p>01 PICK YOUR DESTINATION</p>
        </div>

        <div className="desScreen__details">
          <div className="desScreen__tabs">
            <p className="desScreen__moon">MOON</p>
            <p className="desScreen__mars">MARS</p>
            <p className="desScreen__europa">EUROPA</p>
            <p className="desScreen__titan">TITAN</p>
          </div>

          <div className="desScreen__writeup">
            <div className="desScreen__image">
              <img src={moon} alt="" className="desScreen__pic"/>
            </div>

            <div className="desScreen__writings">
              <h1>MOON</h1>
              <p className="desScreen__about">
                See our planet as you've never seen it before. A perfect relaxing trip
                away to help regain perspective and come back refreshed. While you're
                there, take in some history by visiting the Luna 2 and Apollo 11 landing
                sites
              </p>

              <div className="desScreen__avg">
                <div className="desScreen__distance">
                  <p>AVG. DISTANCE</p>
                  <h6>384,400 KM</h6>
                </div>

                <div className="desScreen__time">
                  <p>EST. TRAVEL TIME</p>
                  <h6>3 DAYS</h6>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default DesScreen