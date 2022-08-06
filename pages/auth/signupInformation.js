import React from 'react'

const signupInformation = () => {
  return (
    <div className="container">
    <div className="page_title">
   <h1>Profile Information</h1>
   <p>Help us by answering questions to get you started</p>
   </div>
   <form className="form_box">

    <div className="signup_info">

     <div className="row">
        <div className="column">
        <h1>I'm looking for</h1>
       <select>
        <option>Mentee</option>
        <option>Mentor</option>
       </select>
       </div>
       <input type="text" placeholder="Current Company"></input>
</div>

<div className="row">
    <div className="column">
       <h1>My designation is</h1>
       <select>
        <option>Software Development</option>
        <option>Machine Learning</option>
        <option>Data Science</option>
        <option>Graphic Design</option>
       </select>
       </div>
       <input type="text" placeholder="Years of Experience"></input>
</div>


<div className="row">
       <input type="text" placeholder="expertise"></input>
       <input type="file"></input>
</div>

       <button className="vertical_margin button secondary_button">Submit</button>
       </div>
   </form>
</div>
  )
}

export default signupInformation