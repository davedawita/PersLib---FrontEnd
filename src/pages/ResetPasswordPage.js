// import {useEffect, useState} from 'react'

// const LoginUser = () => {
//   const [formData, setFormData] = useState({
//     "Username": '',
    
//   })

//   const { username } = formData

//   const handleChange = (e) => {
//     setFormData((prev) => (
//       {
//         ...prev, 
//         [e.target.name]: e.target.value
//       }
//     ))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }

//   return(
//     <div>
//       <h1>Reset password</h1>
//       <form className='inputForm'>

//         <input 
//         type='text' 
//         placeholder='Username'
//         name='Username' 
//         class='textInput'
//         onChange={handleChange}
//         value={username}        
//         required       
//         />        
        
//         <input 
//         type='submit' 
//         value='Reset Password' 
//         class='submitBtn'
//         onClick={handleSubmit}
//         />        

//       </form>

//     </div>
//   )
// }
// export default LoginUser