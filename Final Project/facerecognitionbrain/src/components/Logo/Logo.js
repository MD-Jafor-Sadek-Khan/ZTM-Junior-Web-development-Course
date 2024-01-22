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
          height: "140px",
          width: "150px",
          background: "transparent",
        }}
        tiltMaxAngleX={55}
        tiltMaxAngleY={15}
        scale={1.1}
        tiltReverse={true}
      >
        <div className="child-absolute">
          <ParticlesBg num={6} color="#ffffff" type="cobweb" bg={true} />
          <div className="center flex-column pa3">
            <img
              className="w3"
              style={{ paddingTop: "5px", scale: "1.1" }}
              src={logo}
              alt="logo"
            />
            <p className="b f5 white app-name">FaceSync</p>
          </div>
        </div>
      </Tilt>
    </div>
  )
}
