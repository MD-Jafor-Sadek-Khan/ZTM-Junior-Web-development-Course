import React from "react"
import "tachyons"

export const SignUp = ({handleRegister}) => {
  return (
    <article className="pa4 br4 black-80 flex center shadow-5 mt5  w-90-m w-50-l flex-column">
      <h2 className="ph3 pv1 br4 ma0 bg-black-90 white fw1">Signup</h2>
    
      <div id="signup-form" action="sign-up_submit" method="get" acceptCharset="utf-8">
   
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="ph0 mh0 fw6 clip">Signup</legend>
          <div className="mt3">
            <label className="b white db fw6 lh-copy f6" htmlFor="SignUp-form-name">
              Name
            </label>
            <input
              className="b bg-transparent b b--black br4 pa2 input-reset ba"
              type="text"
              name="SignUp-form-name"
              id="SignUp-form-name"
            />
          </div>
          <div className="mt3">
            <label className="db white fw6 lh-copy f6" htmlFor="SignUp-form-email-address">
              Email
            </label>
            <input
              className=" br4 b--black bg-transparent b pa2 input-reset ba w-100 measure"
              type="email"
              name="SignUp-form-email-address"
              id="SignUp-form-email-address"
            />
          </div>
          <div className="mt3">
            <label className="b white db fw6 lh-copy f6" htmlFor="SignUp-form-password">
              Password
            </label>
            <input
              className="b bg-transparent b b--black br4 pa2 input-reset ba"
              type="password"
              name="SignUp-form-password"
              id="SignUp-form-password"
            />
          </div>
        </fieldset>
        <div className="mt3 flex items-center justify-around">
          <input
            className="b br4 ph3 bg-black-90 pv2 input-reset ba b--black white grow pointer f6"
            type="submit"
            value="Register"
            onClick={handleRegister}
          />
        </div>
      </div>
    </article>
  )
}
