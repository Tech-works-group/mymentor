import React from 'react'

const Login = () => {
  return (
    <div className="container">
        <h1 className="sub_title">Login</h1>
        <form className="form_box">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <a className="small_text" href="#">Forgot Password?</a>
            <button className="vertical_margin button secondary_button">Login</button>
            <p>Or login with</p>
            <p>Not a member yet? <a className="signup_link" href="#">click here to sign up</a></p>
        </form>
    </div>
  )
}

export default Login