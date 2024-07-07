import {useEffect, useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'

const LoginUser = () => {
  const [formData, setFormData] = useState({
    "Username": '',
    "Password": '',
  })

  const { username, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const{user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) //To retrieve the state from state.auth.

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

    const userData = {
      username, password
    }
    dispatch(login(userData))
  }


  useEffect(() => {
    if(isError) {
      toast.error(message)
    } if(isSuccess || user) {
      navigate('/title')      
    } 
    dispatch(reset())

  },[isError, isSuccess, user, navigate,dispatch])

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