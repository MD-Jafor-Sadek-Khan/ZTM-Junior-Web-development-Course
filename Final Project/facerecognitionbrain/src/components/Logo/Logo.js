import React from "react"
import "tachyons"
import Tilt from "react-parallax-tilt"
import logo from "./logo.png"
import ParticlesBg from "particles-bg"
import "./Logo.css"

export const Logo = () => {
  return (
    <div>
      <Tilt
        className="shadow-hover br2 shadow-2 center"
        style={{
          height: "120px",
          width: "130px",
          background: "transparent",
        }}
        tiltMaxAngleX={55}
        tiltMaxAngleY={15}
        scale={1.1}
        tiltReverse={true}
      >
        <div className="child-absolute">
          <ParticlesBg num={5} color="#ffffff" type="cobweb" bg={true} />
          <div className="center flex-column pa3">
            <img
              className="w3"
              style={{ paddingTop: "5px", scale: "0.9" }}
              src={logo}
              alt="logo"
            />
            <span className="b pt1 f5 white app-name">FaceSync</span>
          </div>
        </div>
      </Tilt>
    </div>
  )
}
