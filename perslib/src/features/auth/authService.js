//Import axios
import axios from 'axios'

const BACKEND_DOMAIN = 'http://localhost:8000'

const REGISTER_URL = `${BACKEND_DOMAIN}/user/`
const LOGIN_URL = `${BACKEND_DOMAIN}/login`
const TITLE_URL = `${BACKEND_DOMAIN}/title`
const PERSLIB_URL = `${BACKEND_DOMAIN}/perslib`

//Register User
const register = async(userData)=> {
  const config = {
    headers:{
      "content-type": "application/json"
    }
  }
  const response = await axios.post(REGISTER_URL, userData, config)
  return response.data
}

const authService = {register}

export default authService