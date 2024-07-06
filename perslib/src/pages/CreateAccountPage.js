import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


const CreateAccount = () => {

  const [formData, setFormData] = useState({
    "first_name": '',
    "last_name": '',
    "username": '',
    "password": '',
    "re_password": '',
    "profile_picture": '',
  })

  const { first_name, last_name, email, username, password, re_password, profile_picture } = formData

    
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
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(password !== re_password) {
      // console.log("passwords do not match")
      toast.error("passwords do not match")
    } else {
      const userData = {
        first_name, last_name, email, username, password, re_password, profile_picture
      }
      dispatch(register(userData))
    }
  }


  useEffect(() => {
    if(isError) {
      toast.error(message)
    } if(isSuccess || user) {
      navigate('/:id')      
    } 
  },[isError, isSuccess, user, navigate,dispatch])

  return(
    <div>
      <h1>Create A New Account</h1>
      <form className='inputForm'>

        <input 
        type='text' 
        placeholder='First Name' 
        name='first_name'
        class='textInput'
        value={first_name} 
        onChange={handleChange}        
        />

        <input 
        type='text' 
        placeholder='Last Name'
        name='last_name'
        class='textInput' 
        value={last_name} 
        onChange={handleChange}               
        
        />

        <input 
        type='email' 
        placeholder='Email'
        name='email'
        class='textInput' 
        value={email} 
        onChange={handleChange}               
        required
        />

        <input 
        type='text' 
        placeholder='Username'
        name='username' 
        class='textInput'
        onChange={handleChange}
        value={username}        
        required       
        />

        <input 
        type='password' 
        placeholder='Password'
        name='password' 
        class='textInput' 
        onChange={handleChange}
        value={password}
        required
        />

        <input 
        type='password' 
        placeholder='Retype Password'
        name='re_password' 
        class='textInput' 
        onChange={handleChange}
        value={re_password}
        required
        />

        <input
        placeholder='Profile Picture'
        name='profile_picture' 
        class='profile-picture' 
        value={profile_picture} 
        onChange={handleChange}        
        />       
        
        
        <input 
        type='submit' 
        value='Create Account' 
        class='submitBtn'
        onClick={handleSubmit}
        />

        <input 
        type='submit'         
        value='Login' 
        class='submitBtn'
        onClick={handleSubmit}
        />

      </form>

    </div>
  )
}
export default CreateAccount