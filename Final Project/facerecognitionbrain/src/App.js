// Migrating Clarify API Call to Backend server for Security

// Packeges
import ParticlesBg from "particles-bg"
import React from "react"

// StyleSheet
import "./App.css"

// Components
import { Navigation } from "./components/Navigation/Navigation"
import { Logo } from "./components/Logo/Logo"
import { Rank } from "./components/Rank/Rank"
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm"
import { FaceDetection } from "./components/FaceDetection/FaceDetection"
import { Login } from "./components/Login/Login"
import { SignUp } from "./components/SignUp/SignUp.js"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      imgUrl: "",
      boxs: [],
      route: "",
      user: {
        id: "",
        name: "",
        email: "",
        count: "",
        registerDate: "",
      },
    }
  }

  updateUser = (user) => {
    this.setState({
      imgUrl: "",
      boxs: [],
      input: "",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        count: user.count,
        registerDate: user.registerDate,
      },
    })
  }

  handleRout = (route) => {
    this.setState({ route: route })
  }

  inputOnChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }

  clickButtonHandler = () => {
    this.setState({
      imgUrl: this.state.input,
      boxs: [],
    })
    this.clarifyApiCaller(this.state.input)
  }

  clarifyApiCaller = (imageUrl) => {
    fetch("http://localhost:3005/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: this.state.input }),
    })
    .then(res => res.json())
      .then((boxsArray) => {
        const faceBoxsData = this.calculateFaceBoxs(boxsArray)
        this.setState({ boxs: faceBoxsData })
      })
      .catch((error) => console.log("error", error))
  }

  calculateFaceBoxs = (boxs) => {
    const img = document.getElementById("detection-image")
    const width = Number(img?.width)
    const height = Number(img?.height)

    const boxsArray = boxs.map((box, index) => {
      const faceBox = {
        top: box?.topRow * height,
        bottom: height - box?.bottomRow * height,
        left: box?.leftCol * width,
        right: width - box?.rightCol * width,
      }

      return (
        <div
          key={index}
          className="faceBox"
          style={{
            top: faceBox?.top,
            bottom: faceBox?.bottom,
            left: faceBox?.left,
            right: faceBox?.right,
          }}
        ></div>
      )
    })

    return boxsArray
  }



  handleImageSubmitCount = (image) => {
    
    fetch("http://localhost:3005/image", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
      }),
    })
      .then((res) => res.json())
      .then((reciveCount) => {
        this.setState((prev) => {
          const prevUser = { ...prev.user }
          const newUser = Object.defineProperty(prevUser, "count", {
            value: reciveCount,
          })
          return { user: newUser }
        })
        this.clickButtonHandler()
      })
  }

  render() {
        
   
    
    const { route } = this.state
    if (route === "login" || route === "" || route === "signout") {
      return (
        <div className="App" style={{ padding: "0 50px" }}>
          <ParticlesBg num={2} color="#ffffff" type="cobWeb" bg={true} />
          <div className="flex flex-row items-start justify-start tl mt3">
            <Logo />
          </div>
          <Login updateUser={this.updateUser} handleRout={this.handleRout} />
        </div>
      )
    } else if (route === "loggedin") {
      return (
        <div className="App" style={{ padding: "0 50px" }}>
          <ParticlesBg num={2} color="#ffffff" type="cobWeb" bg={true} />
          <div className="flex flex-row-reverse items-start justify-between mt3">
            <Navigation handleRout={this.handleRout} />
            <Logo />
          </div>
          <div className="center flex-column">
            <Rank user={this.state.user} />
            <ImageLinkForm
              handleImageSubmitCount={this.handleImageSubmitCount}
              inputOnChangeHandler={this.inputOnChangeHandler}
              clickButtonHandler={this.clickButtonHandler}
            />
            <FaceDetection boxs={this.state.boxs} url={this.state.imgUrl} />
          </div>
        </div>
      )
    } else if (route === "signup") {
      return (
        <div className="App" style={{ padding: "0 50px" }}>
          <ParticlesBg num={2} color="#ffffff" type="cobWeb" bg={true} />
          <div className="flex flex-row- items-start justify-between mt3">
            <Logo />
          </div>
          <SignUp updateUser={this.updateUser} handleRout={this.handleRout} />
        </div>
      )
    }
  }
}

export default App
