import React from 'react'

const signup = () => {
  return (
    <div className="container">
     <div className="page_title">
    <h1>Create a new account</h1>
    <p>Basic account information</p>
    </div>
    <form className="form_box">

      <div className="signup_form">
      <div className="Personal_info">
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        </div>

        <div className="password_confirmation">
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
        </div>

        </div>

        <button className="vertical_margin button secondary_button">Sign Up</button>
        <p>Or Sign Up with</p>

        <div>
        <label>I accept the <a className="terms_link" href="#">terms and conditions</a>
        <input className="checkbox" type="checkbox"></input>
        </label>
        </div>
    </form>
</div>
  )
}

export default signup