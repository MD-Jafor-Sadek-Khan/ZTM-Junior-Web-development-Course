import React from "react"
import "./FaceBox.css"

export const FaceBox = ({faceBox}) => {
  return (
    <div
      className="faceBox"
      style={{
        top: faceBox?.top,
        bottom: faceBox?.bottom,
        left: faceBox?.left,
        right: faceBox?.right,
      }}
    ></div>
  )
}
