//Import All Our Components
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'  //This is for the alert kind message in react

import LoginUser from './pages/LoginPage.js'
import CreateAccount from './pages/CreateAccountPage.js'
// import ResetPasswordPage from './pages/ResetPasswordPage.js'


import AllYears from './pages/AllYears.js'
import AllTitles from './pages/AllTitles.js'
import AllPerslibs from './pages/AllPerslibs.js'
import FormTitle from './pages/FormTitle.js'
import FormPerslib from './pages/FormPerslib.js'
import FormYear from './pages/FormYear.js'
import SinglePerslib from './pages/SinglePerslib.js'
import SingleTitle from './pages/SingleTitle.js'
import SingleYear from './pages/SingleYear.js'

import './App.css'

//Import React and hooks
import {useState, useEffect} from 'react'

//import components from React Router
import {Route, Routes} from 'react-router-dom'




//OUR API URL
// const apiURL = process.env.REACT_APP_BACKEND_URL  
const apiURL = 'http://localhost:8000'



function App(props) {
  //========================================================================================================
  //Setting up STATES
  //========================================================================================================

  //setup state for Creating User:
  const [currentUser, setCurrentUser] = useState({})       //Upon display of the user page, since username is not set, initial value of useState is empty.

  //setup state for login:
  const [Login, setLogin] = useState(true)       //This is true since Login page is rendered.

  //setup state for logout:
  const [Logout, setLogout] = useState(true)       //This is true since Login page is rendered.

  //setup state for profile picture:
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  //setup state for our years, titles, and perslibs:
  const [years, setYears] = useState([])
  const [titles, setTitles] = useState([])
  const [perslibs, setPerslibs] = useState([]) 


  //=========================================================================================================
  //FUNCTIONS
  //=========================================================================================================

  //Defining GET functions:

  //For years page:
  const getYears = async () => {
    const response = await fetch(apiURL + '/year/')
    const dataYear = await response.json()
    console.log(dataYear)
    setYears(dataYear)
  }

  //For titles page:
  const getTitles = async () => {
    const response = await fetch(apiURL + '/title/')
    const dataTitle = await response.json()
    console.log(dataTitle)
    setTitles(dataTitle)
  }

  //For perslib page:
  const getPerslibs = async () => {
    const response = await fetch(apiURL + '/perslib/')
    const dataPerslib = await response.json()
    console.log(dataPerslib)
    setPerslibs(dataPerslib)
  }
  //============================================================================
  //Defining functions for our document CREATE & EDIT:

  //Create & Edit function for Years page:

  const handleFormYear = async (dataYear, type) => {
    if(type === 'newyear'){     //If new, we are creating a resource    
    await fetch(`${apiURL}/year/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataYear)
    })
    getYears()
  } else {
    await fetch(`${apiURL}/year/${dataYear.id}/`, {         //Here, data is bubbling up from FormYear.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataYear)
    })     
    getYears()
  }
  }

  //Create & Edit function for Titles page:

  const handleFormTitle = async (dataTitle, type) => {
    if(type === 'newtitle'){     //If new, we are creating a resource    
    await fetch(`${apiURL}/title/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataTitle)
    })
    getTitles()
  } else {
    await fetch(`${apiURL}/title/${dataTitle.id}/`, {         //Here, data is bubbling up from FormYear.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataTitle)
    })     
    getTitles()
  }
  }

  //Create & Edit function for Perslibs page:

  const handleFormPerslib = async (dataPerslib, type) => {
    if(type === 'newperslib'){     //If new, we are creating a resource    
    await fetch(`${apiURL}/perslib/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataPerslib)
    })
    getPerslibs()
  } else {
    await fetch(`${apiURL}/perslib/${dataPerslib.id}/`, {         //Here, data is bubbling up from FormPerslib.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataPerslib)
    })     
    getPerslibs()
  }
  }

  //============================================================================
  //Defining DELETE functions for documents:

  //Delete function for Years page:
  const deleteYear = async (id) => {
    await fetch(`${apiURL}/year/${id}/`,
    {
      method: 'delete'
    })
    getYears()
  }

  //Delete function for Titles page:
  const deleteTitle = async (id) => {
    await fetch(`${apiURL}/title/${id}/`,
    {
      method: 'delete'
    })
    getTitles()
  }

  //Delete function for Perslibs page:
  const deletePerslib = async (id) => {
    await fetch(`${apiURL}/perslib/${id}/`,
    {
      method: 'delete'
    })
    getPerslibs()
  }

  //=============================================================================
  
  //useEffect
  useEffect(() => {
    getYears()
  }, [])

  //=============================================================================

  return (
    <div className="App">
      {/* <h1 className='BigTitle'>Perslib</h1> */}
      <Routes>
        <Route
          exact 
          path="/"
          element={<AllYears years={years} deleteYear={deleteYear} />}    
        />
        <Route
          exact 
          path="/:id"
          element={<AllTitles titles={titles} deleteTitle={deleteTitle} /> }
        />
        <Route
          exact 
          path="/:id/:id"
          element={<AllPerslibs perslibs={perslibs} /> }
        />

        
        <Route
          exact 
          path="/:id/SingleTitle"
          element={<SingleTitle titles={titles} deleteTitle={deleteTitle} /> }
        /> 
        <Route
          exact 
          path="/:id/:id/SinglePerslib"
          element={<SinglePerslib perslibs={perslibs} deletePerslib={deletePerslib} /> }
        /> 

        <Route
          exact 
          path="/newyear"
          element={<FormYear years={years} handleFormYear={handleFormYear} buttonLabel_year='Add Year' formType='newyear' />} 
          // Here, we are passing the "handleFormYear", "buttonlabel_year", and "formType" props to FormYear.js.
        />   
        <Route
          exact 
          path="/edityear/:id"
          element={<FormYear years={years} handleFormYear={handleFormYear} buttonLabel_year='Edit Year' formType='edityear' />}
        />

        <Route
          exact 
          path="/newtitle"
          element={<FormTitle titles={titles} handleFormTitle={handleFormTitle} buttonLabel_title='Add Title' formType='newtitle' />} 
        />
        <Route
          exact 
          path="/edititle/:id"
          element={<FormTitle titles={titles} handleFormTitle={handleFormTitle} buttonLabel='Edit Title' formType='edititle' />}
        />
        <Route
          exact 
          path="/newperslib"
          element={<FormPerslib perslibs={perslibs} handleFormPerslib={handleFormPerslib} buttonLabel_perslib='Add Item' formType='newperslib' />} 
        />
        <Route
          exact 
          path="/editperslib/:id"
          element={<FormPerslib perslibs={perslibs} handleFormPerslib={handleFormPerslib} buttonLabel_perslib='Edit Item' formType='editperslib' />}
        />
        <Route
          exact
          path="/login"
          element={<LoginUser />}
        />   
        <Route
          exact
          path="/user"
          element={<CreateAccount />}
        />  
        {/* <Route
          exact
          path="/resetpassword"
          element={<ResetPasswordPage />}
        />  */}
        
      </Routes>  

      <ToastContainer />    
     

      

    </div>
  )
}

export default App
