//Import All Our Components
// import Header from './components/Header'
// import Years from '.pages/Years.js'
// import Titles from '.pages/Titles.js'
// import Perslib from '.pages/Perslib.js'
// import Form from '.pages/Form.js'


import './App.css';

//Import React and hooks
import {useState, useEffect} from 'react'

//import components from React Router
import {Route, Routes} from 'react-router-dom'

//OUR API URL
// const apiURL = process.env.REACT_APP_BACKEND_URL  
const apiURL = 'http://localhost:8000'

function App(props) {
  //setup state for our Docs

  const [docs, setDocs] = useState([])

  //Functions

  //Define a function for get:

  //Define a function for our Create & Edit:


  //Define a function for delete:


  //useEffect
  // useEffect(() => {
  //   getBlogs()
  // }, [])


  return (
    <div className="App">
      <h1 className='BigTitle'>Perslib</h1>
      {/* <Routes>
        <Route
          exact 
          path="/"
          element={<Years posts={posts} deletePerslib ={deletePerslib} />}
        />
        <Route
          exact 
          path="/title/:id"
          element={<Titles posts={posts} />}
        />
        <Route
          exact 
          path="/new"
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog'
          formType='new'/>} //Here, we are passing the "handleSubmit", "buttonlabel", and "formType" props to Form.js.
        />
        <Route
          exact 
          path="/edit/:id"
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Edit Blog' formType='edit'/>}
        />
         
        
      </Routes> */}
    </div>

  )
}

export default App
