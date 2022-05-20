import React from 'react'

function Header() {
  return (
    // <div className='header'>Welcome to my first Component</div>
    // <div className='body'>
    // <div className='header'>
    //     <h1>Process Layout Example</h1>
    //     </div>
    //     </div>
    <center>
    <div className='box'>
      <center><h2>Registration Form</h2></center>
      <center>
    <form className='mainbox'>
      <label>First name: </label><input type="text" placeholder='your name here'/>  <br></br><br></br>
      <label>Last Name: </label><input type="text"placeholder='your age'/>  <br></br><br></br>
      <label>Username: </label><input type="text" placeholder='your name here'/>  <br></br><br></br>
      <label>Password: </label><input type="text"placeholder='your age'/>  <br></br><br></br>
      <label>Email: </label><input type="text" placeholder='your name here'/>  <br></br><br></br>
      <label>Mobile No.: </label><input type="text"placeholder='your age'/>  <br></br><br></br>
      <br></br><br></br>
      <span className='button'><input type="submit" value ="Register"/></span>
    </form>
    </center>
    </div>
    </center>
  )
}

export default Header