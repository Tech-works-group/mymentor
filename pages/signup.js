import React from 'react'

const signup = () => {
  return (
    <div className="container">
     <div className="page_title">
    <h1>Create a new account</h1>
    <p>Basic account information</p>
    </div>
    <form>
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

export default signup