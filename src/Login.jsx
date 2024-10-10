import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

  return (
    <div>

      <h1>login</h1>

      <button onClick={() => navigate('/products')} className='btn btn-primary'>Go to Products page</button>

    </div>
  )
}

export default Login
