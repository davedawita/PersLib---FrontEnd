const CreateAccount = (props) => {
  return(
    <div>
      <h1>Create A New Account</h1>
      <form className='inputForm'>

        <input 
        type='text' 
        placeholder='First Name' 
        class='textInput' 
        // value={{username}}
        />

        <input 
        type='text' 
        placeholder='Last Name' 
        class='textInput' 
        // value={{username}}
        />

        <input 
        type='text' 
        placeholder='New Username' 
        class='textInput' 
        // value={{username}}
        />

        <input 
        type='password' 
        placeholder='New Password' 
        class='textInput' 
        // password={{password}}
        />

        <input 
        type='file' 
        placeholder='Profile Picture'
        name='image' 
        class='profile-picture'         
        // password={{password}}
        />       
        
        <input 
        type='submit' 
        value='Create Account' 
        class='submitBtn'
        onClick={(event) => {event.preventDefault()}}
        />

        <input 
        type='submit' 
        value='Login' 
        class='submitBtn'
        onClick={(event) => {event.preventDefault()}}
        />

      </form>

    </div>
  )
}
export default CreateAccount