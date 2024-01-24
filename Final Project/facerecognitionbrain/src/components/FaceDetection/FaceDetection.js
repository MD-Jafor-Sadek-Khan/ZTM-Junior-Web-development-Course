import "./FaceDetection.css"
import React from "react"

export const FaceDetection = ({ boxs, url }) => {
  return (
    <div className="center parentBox">
      <img
        id="detection-image"
        src={url}
        className=" face-detection-output-image mt2 br4"
        alt=""
      />
      <div>{boxs}</div>
    </div>
  )
}
