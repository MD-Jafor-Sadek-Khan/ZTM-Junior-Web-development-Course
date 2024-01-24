import "./App.css"
import React from "react"
import { Navigation } from "./components/Navigation/Navigation"
import { Logo } from "./components/Logo/Logo"
import { Rank } from "./components/Rank/Rank"
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm"
import ParticlesBg from "particles-bg"
import { FaceDetection } from "./components/FaceDetection/FaceDetection"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      imgUrl: "",
      boxs: [],
    }
  }

  inputOnChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  clarifyApiCaller = (imageUrl) => {
    const PAT = "791589e8b409406289142c3eb00dd6a1"
    const USER_ID = "c2dc2bha1jx2"
    const APP_ID = "facerecognitionbrain"
    const MODEL_ID = "face-detection"
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105"
    const IMAGE_URL = imageUrl

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    })

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    }

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const regions = result.outputs[0].data.regions
        const boxsArray = regions.map((region) => {
          const boundingBox = region.region_info.bounding_box
          const topRow = boundingBox.top_row
          const leftCol = boundingBox.left_col
          const bottomRow = boundingBox.bottom_row
          const rightCol = boundingBox.right_col

          const data = { topRow, leftCol, bottomRow, rightCol }
          return data
        })
        const faceBoxsData = this.calculateFaceBoxs(boxsArray)
        this.setState({ boxs: faceBoxsData })
      })
      .catch((error) => console.log("error", error))


  }

  calculateFaceBoxs = (boxs) => {
    const img = document.getElementById("detection-image")
    const width = Number(img?.width)
    const height = Number(img?.height)
    const boxsArray = []

    boxs.forEach((box, index) => {
      const faceBox = {
        top: box?.topRow * height,
        bottom: height - box?.bottomRow * height,
        left: box?.leftCol * width,
        right: width - box?.rightCol * width,
      }

      boxsArray.push(
        <div
          className="faceBox"
          style={{
            top: faceBox?.top,
            bottom: faceBox?.bottom,
            left: faceBox?.left,
            right: faceBox?.right,
            position: "absolute",
            boxShadow: "0 0 0 3px #149df2 inset",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            cursor: "pointer",
          }}
        ></div>
      )
    })

    return boxsArray
  }

  clickButtonHandler = (event) => {
    this.setState({
      imgUrl: this.state.input,
      boxs:[]
    })
    this.clarifyApiCaller(this.state.input)
  }

  render() {
    return (
      <div className="App" style={{ padding: "0 50px" }}>
        <ParticlesBg num={2} color="#ffffff" type="cobWeb" bg={true} />
        <div className="flex flex-row-reverse items-start justify-between mt3">
          <Navigation />
          <Logo />
        </div>
        <div className="center flex-column">
          <Rank />
          <ImageLinkForm
            inputOnChangeHandler={this.inputOnChangeHandler}
            clickButtonHandler={this.clickButtonHandler}
          />
          <FaceDetection boxs={this.state.boxs} url={this.state.imgUrl} />
        </div>
      </div>
    )
  }
}

export default App
