import React from "react"
import "tachyons"

export class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      registerName: "",
      registerEmail: "",
      registerPassword: "",
    }
  }

  setUserEmail(event) {
    this.setState({
      registerEmail: event.target.value,
    })
  }

  setUserPassword(event) {
    this.setState({
      registerPassword: event.target.value,
    })
  }

  setUserName(event) {
    this.setState({
      registerName: event.target.value,
    })
  }

  submitServerRegister() {
    fetch("http://localhost:3005/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if(user.id){

          this.props.updateUser(user)
          this.props.handleRout("loggedin")
        }
      })
      .catch((err) => console.log("error", err))
  }

  render() {
    return (
      <article className="pa4 br4 black-80 flex center shadow-5 mt5  w-90-m w-50-l flex-column">
        <h2 className="ph3 pv1 br4 ma0 bg-black-90 white fw1">Signup</h2>

        <div
          id="signup-form"
          action="sign-up_submit"
          method="get"
          acceptCharset="utf-8"
        >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Signup</legend>
            <div className="mt3">
              <label
                className="b white db fw6 lh-copy f6"
                htmlFor="SignUp-form-name"
              >
                Name
              </label>
              <input
                className="b bg-transparent b b--black br4 pa2 input-reset ba"
                type="text"
                name="SignUp-form-name"
                id="SignUp-form-name"
                onChange={(event) => this.setUserName(event)}
              />
            </div>
            <div className="mt3">
              <label
                className="db white fw6 lh-copy f6"
                htmlFor="SignUp-form-email-address"
              >
                Email
              </label>
              <input
                className=" br4 b--black bg-transparent b pa2 input-reset ba w-100 measure"
                type="email"
                name="SignUp-form-email-address"
                id="SignUp-form-email-address"
                onChange={(event) => this.setUserEmail(event)}
              />
            </div>
            <div className="mt3">
              <label
                className="b white db fw6 lh-copy f6"
                htmlFor="SignUp-form-password"
              >
                Password
              </label>
              <input
                className="b bg-transparent b b--black br4 pa2 input-reset ba"
                type="password"
                name="SignUp-form-password"
                id="SignUp-form-password"
                onChange={(event) => this.setUserPassword(event)}
              />
            </div>
          </fieldset>
          <div className="mt3 flex items-center justify-around">
            <input
              className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
              type="submit"
              value="Register"
              onClick={() => this.submitServerRegister()}
            />
            <button
              className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
              onClick={() => this.props.handleRout("")}
            >
              Login
            </button>
          </div>
        </div>
      </article>
    )
  }
}
