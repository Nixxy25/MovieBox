import React from 'react'
import { Link } from 'react-router-dom'

function Headerpage() {
  return (
    <div className='Header'>
        <div className='movie'>
            <img src='./Images/tv.png'></img>
            <p><Link to="/MovieBox">MovieBox</Link></p>
        </div>

        <div className='search'>
            <input type='text' value="What do you want to watch?"></input>
        </div>

        <div className='sign-in'>
            <p>Sign in</p>
            <div className='border'>
               <img src='./Images/Menu alt 4.png'></img>
            </div>
        </div>
    </div>
  )
}

export default Headerpage