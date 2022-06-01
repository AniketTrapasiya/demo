import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = ({ setSigninUser }) => {
  return (
  
      <div className='homepage'>
                <h2>Welcome to HomePage</h2>
                <Link className="button" to="/" onClick={() => setSigninUser({})}>Logout</Link>
            </div>
  )
}
export default Homepage;