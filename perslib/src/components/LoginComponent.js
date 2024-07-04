
const Login = () => {
  return(
    <div>
      <h1>Login to Your Account</h1>
      <form className='inputForm'>

        <input 
        type='text' 
        placeholder='Username' 
        class='textInput' 
        // value={{username}}
        />

        <input 
        type='password' 
        placeholder='Password' 
        class='textInput' 
        // password={{password}}
        />
        
        <input 
        type='submit' 
        value='LOGIN' 
        class='submitBtn'
        onClick={(event) => {event.preventDefault()}}
        />

        <input 
        type='submit' 
        value='Create Account' 
        class='submitBtn'
        onClick={(event) => {event.preventDefault()}}
        />

      </form>

    </div>
  )
}
export default Login