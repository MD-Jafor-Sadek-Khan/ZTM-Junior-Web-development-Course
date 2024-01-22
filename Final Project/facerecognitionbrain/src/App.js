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
      box: [],
    }
  }

  inputOnChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  clarifyApiCaller = async (imageUrl) => {
    const PAT = "791589e8b409406289142c3eb00dd6a1"
    const USER_ID = "c2dc2bha1jx2"
    const APP_ID = "facerecognitionbrain"
    const MODEL_ID = "face-detection"
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105"
    const IMAGE_URL = imageUrl

    const allData = []

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
        const regions = result.outputs[0].data.regions;
      
        regions.forEach((region) => {
          const boundingBox = region.region_info.bounding_box
          const topRow = boundingBox.top_row.toFixed(3)
          const leftCol = boundingBox.left_col.toFixed(3)
          const bottomRow = boundingBox.bottom_row.toFixed(3)
          const rightCol = boundingBox.right_col.toFixed(3)
      
          const data = { topRow, leftCol, bottomRow, rightCol }
          
          this.setState(prevState => ({
            box: [...prevState.box, data]
          }), () => {
            console.log("Updated box state:", this.state.box);
          });
        });
      })
      .catch((error) => console.log("error", error))
    return allData
  }

  clickButtonHandler = async (event) => {
    try {
      this.setState({ imgUrl: this.state.input })
      await this.clarifyApiCaller(this.state.input) 
      console.log(this.state.box);
    } catch (error) {
      console.error("Error in API call:", error)
    }
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
          <FaceDetection box={this.state.box} url={this.state.imgUrl} />
        </div>
      </div>
    )
  }
}

export default App
