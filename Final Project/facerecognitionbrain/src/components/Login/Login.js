import React from "react"
import "tachyons"

export const Login = ({ handleLogin, handleSignUp }) => {
  return (
    <article className="pa4 br4 black-80 flex center shadow-5 mt5  w-75-m w-50-l flex-column">
      <h2 className="ph3 pv1 br4 ma0 bg-black-90 white fw1">Login</h2>

      <div id="login-form" action="sign-up_submit" method="get" acceptCharset="utf-8">
        <fieldset id="log-in" className="ba b--transparent ph0 mh0">
          <legend className="ph0 mh0 fw6 clip">Login</legend>
          <div className="mt3">
            <label className="db white fw6 lh-copy f6" htmlFor="Lognin-form-email-address">
              Email
            </label>
            <input
              className=" br4 b--black bg-transparent b pa2 input-reset ba w-100 measure"
              type="email"
              name="Lognin-form-email-address"
              id="Lognin-form-email-address"
            />
          </div>
          <div className="mt3">
            <label className="b white db fw6 lh-copy f6" htmlFor="Lognin-form-password">
              Password
            </label>
            <input
              className="b bg-transparent b b--black br4 pa2 input-reset ba"
              type="password"
              name="Lognin-form-password"
              id="Lognin-form-password"
            />
          </div>
        </fieldset>
        <div className="mt3 flex items-center justify-around">
          <button
            className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
            onClick={()=>handleLogin()}
          >
            Login
          </button>
          <input
            className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
            type="submit"
            value="Signup"
            onClick={handleSignUp}
          />
        </div>
      </div>
    </article>
  )
}
