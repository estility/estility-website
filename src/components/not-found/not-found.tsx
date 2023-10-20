import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ height: '100vh'}} className='full-width d-flex flex-column gap-10 align-center justify-center '>
      <div>The page you are looking for doesn't exist</div>
      <Link to='/'>Please go home</Link>
    </div>
  )
}

export default NotFound