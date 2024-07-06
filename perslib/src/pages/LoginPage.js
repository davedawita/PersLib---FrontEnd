import {useEffect, useState} from 'react'
import {Link } from 'react-router-dom'

const LoginUser = () => {
  const [formData, setFormData] = useState({
    "Username": '',
    "Password": '',
  })

  const { username, password } = formData

  const handleChange = (e) => {
    setFormData((prev) => (
      {
        ...prev, 
        [e.target.name]: e.target.value
      }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <div>
      <h1>Login to Your Account</h1>
      <form className='inputForm'>

        <input 
        type='text' 
        placeholder='Username'
        name='Username' 
        class='textInput'
        onChange={handleChange}
        value={username}        
        required       
        />

        <input 
        type='password' 
        placeholder='Password'
        name='Password' 
        class='textInput' 
        onChange={handleChange}
        value={password}
        required
        />
        
        <input 
        type='submit' 
        value='LOGIN' 
        class='submitBtn'
        onClick={handleSubmit}
        />

        <input 
        type='submit' 
        value='Create Account' 
        class='submitBtn'
        onClick={handleSubmit}
        />
      <Link to="/resetpassword">Forget Password?</Link>
      </form>

    </div>
  )
}
export default LoginUser