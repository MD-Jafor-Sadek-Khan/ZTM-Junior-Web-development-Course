import { FaceBox } from "./FaceBox"
import "./FaceDetection.css"

export const FaceDetection = ({ boxs, url }) => {
  const img = document.getElementById("detection-image")
  const width = Number(img?.width)
  const height = Number(img?.height)

  const faceBoxs = []

  boxs.forEach((box, index) => {
    const faceBox = {
      top: box?.topRow * height,
      bottom: height - box?.bottomRow * height,
      left: box?.leftCol * width,
      right: width - box?.rightCol * width,
    }
    faceBoxs.push(<FaceBox key={index} faceBox={faceBox} />)
  })

  console.log("FaceDetection - faceBox", faceBoxs)
  return (
    <div className="center parentBox">
      <img
        id="detection-image"
        src={url}
        className=" face-detection-output-image mt2 br4"
        alt=""
      />
      {faceBoxs}
    </div>
  )
}
