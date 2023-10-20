import React from 'react'
import { Link } from 'react-router-dom'

const FallBack = () => {
  return (
    <div style={{ height: '100vh'}} className='full-width d-flex flex-column gap-10 align-center justify-center '>
      <div>Something went wrong</div>
      <Link to='/'>Please go home</Link>
    </div>
  )
}

export default FallBack