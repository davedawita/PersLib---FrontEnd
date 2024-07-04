//Import All Our Components
import Header from './components/Header'

import LoginComponent from './components/LoginComponent'
import CreateAccount from './components/CreateAccount'

import Years from './pages/Years.js'
import Titles from './pages/Titles.js'
import Perslib from './pages/Perslib.js'
import FormTitle from './pages/FormTitle.js'
import FormPerslib from './pages/FormPerslib.js'
import FormYear from './pages/FormYear.js'
import SinglePerslib from './pages/SinglePerslib.js'

import './App.css'

//Import React and hooks
import {useState, useEffect} from 'react'

//import components from React Router
import {Route, Routes} from 'react-router-dom'


//Import axios
import axios from 'axios'

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
    const data = await response.json()
    console.log(data)
    setYears(data)
  }

  //For titles page:
  const getTitles = async () => {
    const response = await fetch(apiURL + '/title/')
    const data = await response.json()
    console.log(data)
    setTitles(data)
  }

  //For perslib page:
  const getPerslibs = async () => {
    const response = await fetch(apiURL + '/perslib/')
    const data = await response.json()
    console.log(data)
    setPerslibs(data)
  }
  //============================================================================
  //Defining functions for our document CREATE & EDIT:

  //Create & Edit function for Years page:

  const handleFormYear = async (data, type) => {
    if(type === 'new'){     //If new, we are creating a resource    
    await fetch(`${apiURL}/year/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    getYears()
  } else {
    await fetch(`${apiURL}/year/${data.id}/`, {         //Here, data is bubbling up from FormYear.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })     
    getYears()
  }
  }

  //Create & Edit function for Titles page:

  const handleFormTitle = async (data, type) => {
    if(type === 'new'){     //If new, we are creating a resource    
    await fetch(`${apiURL}/title/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    getTitles()
  } else {
    await fetch(`${apiURL}/title/${data.id}/`, {         //Here, data is bubbling up from FormYear.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })     
    getTitles()
  }
  }

  //Create & Edit function for Perslibs page:

  const handleFormPerslib = async (data, type) => {
    if(type === 'new'){     //If new, we are creating a resource    
    await fetch(`${apiURL}/perslib/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    getPerslibs()
  } else {
    await fetch(`${apiURL}/perslib/${data.id}/`, {         //Here, data is bubbling up from FormPerslib.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
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
          element={<Years years={years} deleteYear={deleteYear} />}    //Bringing state to route.
        />
        <Route
          exact 
          path="/:title"
          element={<Titles titles={titles} deleteTitle={deleteTitle} /> }
        />
        <Route
          exact 
          path="/:title/:perslib"
          element={<Perslib perslibs={perslibs} /> }
        />
        <Route
          exact 
          path="/:title/:perslib/:id"
          element={<SinglePerslib perslibs={perslibs} deletePerslib={deletePerslib} /> }
        />
  

        <Route
          exact 
          path="/newyear"
          element={<FormYear years={years} handleFormYear={handleFormYear} buttonLabel_year='Add Year' formType='new_year' />} 
          // Here, we are passing the "handleFormYear", "buttonlabel", and "formType" props to FormYear.js.
        />   
        <Route
          exact 
          path="/edityear/:id"
          element={<FormYear years={years} handleFormYear={handleFormYear} buttonLabel_year='Edit Year' formType='edit_year' />}
        />

        <Route
          exact 
          path="/newtitle"
          element={<FormTitle titles={titles} handleFormTitle={handleFormTitle} buttonLabel_title='Add Title' formType='new_title' />} 
        />
        <Route
          exact 
          path="/edititle/:id"
          element={<FormTitle titles={titles} handleFormTitle={handleFormTitle} buttonLabel_title='Edit Title' formType='edit_title' />}
        />
        <Route
          exact 
          path="/newperslib"
          element={<FormPerslib perslibs={perslibs} handleFormPerslib={handleFormPerslib} buttonLabel_perslib='Add Item' formType='new_perslib' />} 
        />
        <Route
          exact 
          path="/editperslib/:id"
          element={<FormPerslib perslibs={perslibs} handleFormPerslib={handleFormPerslib} buttonLabel_perslib='Edit Item' formType='edit_perslib' />}
        />
        <Route
          exact
          path="/login"
          element={<LoginComponent />}
        />   
        <Route
          exact
          path="/user"
          element={<CreateAccount onClick={handleChange}/>}
        />     
      </Routes>  

      <img src={file} /> 

      {currentUser.username ?
      <div class='loggedInDiv'>
        {/* <Header handleLogout={handleLogout}/> */}
        {/* <Main username={username}/>           */}
      </div>
      :
      null
    }    

    </div>
  )
}

export default App
