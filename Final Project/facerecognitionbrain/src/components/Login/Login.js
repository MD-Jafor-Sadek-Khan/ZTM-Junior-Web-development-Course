import React from "react"
import "tachyons"

export class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userEmail: "",
      userPassword: "",
    }
  }

  setUserEmail(event) {
    this.setState({
      userEmail: event.target.value,
    })
  }

  setUserPassword(event) {
    this.setState({
      userPassword: event.target.value,
    })
  }

  submitServerLogin() {
    fetch("http://localhost:3005/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.userEmail,
        password: this.state.userPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          this.props.updateUser(data)
          this.props.handleRout("loggedin")
        }
      })
      .catch(console.log)
  }

  render() {
    return (
      <article className="pa4 br4 black-80 flex center shadow-5 mt5  w-75-m w-50-l flex-column">
        <h2 className="ph3 pv1 br4 ma0 bg-black-90 white fw1">Login</h2>

        <div
          id="login-form"
          action="sign-up_submit"
          method="get"
          acceptCharset="utf-8"
        >
          <fieldset id="log-in" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Login</legend>
            <div className="mt3">
              <label
                className="db white fw6 lh-copy f6"
                htmlFor="Lognin-form-email-address"
              >
                Email
              </label>
              <input
                className=" br4 b--black bg-transparent b pa2 input-reset ba w-100 measure"
                type="email"
                name="Lognin-form-email-address"
                id="Lognin-form-email-address"
                onChange={(event) => this.setUserEmail(event)}
              />
            </div>
            <div className="mt3">
              <label
                className="b white db fw6 lh-copy f6"
                htmlFor="Lognin-form-password"
              >
                Password
              </label>
              <input
                className="b bg-transparent b b--black br4 pa2 input-reset ba"
                type="password"
                name="Lognin-form-password"
                id="Lognin-form-password"
                onChange={(event) => this.setUserPassword(event)}
              />
            </div>
          </fieldset>
          <div className="mt3 flex items-center justify-around">
            <button
              className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
              onClick={() => this.submitServerLogin()}
            >
              Login
            </button>
            <input
              className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
              type="submit"
              value="Signup"
              onClick={() => this.props.handleRout("signup")}
            />
          </div>
        </div>
      </article>
    )
  }
}
