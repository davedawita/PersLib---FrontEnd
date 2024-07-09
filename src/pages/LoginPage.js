import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'

const LoginUser = () => {
  
  const {id} = useParams()

  const [formData, setFormData] = useState({
    "Username": "",
    "Email": "",
    "Password": "",
  })

  const { email, username, password } = formData

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
      email, username, password
    }
    dispatch(login(userData))
  }


  useEffect(() => {
    if(isError) {
      toast.error(message)
    } if(isSuccess || user) {
      navigate('/')      
    } 
    dispatch(reset())

  },[isError, isSuccess, user, navigate,dispatch, message])

  return(
    <div>
      <h1>Login to Your Account</h1>
      <form className='inputForm'>

        <input 
        type='email' 
        placeholder='Email'
        name='Email' 
        class='textInput'
        onChange={handleChange}
        value={email}        
        required       
        />

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