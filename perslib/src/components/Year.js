
import {Link, useNavigate, useParams} from 'react-router-dom'
// import { useState, useEffect } from "react"

const Year = ({asdf, deleteYear, years}) => {
  const params = useParams()
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(true)
  // const [currentYear, setCurrentYear] = useState(null)

  // useEffect(() => {
  //   const foundYear = (years || []).find(post => post.id === parseInt(params.id))
  //   if (foundYear) {
  //     setCurrentYear(foundYear)
  //     setLoading(false)
  //   } else {
  //     setLoading(true)
  //   }
  // }, [params.id, years])


  const handleDelete = (event) => {
    event.preventDefault()
    deleteYear(asdf.id)
    navigate('/year')
  }


  // if (loading) {
  //   return <div>Loading...</div>
  // }
  // if (!currentYear) {
  //   return <div>Post not found</div>
  // }


  return(
    <div>
      <Link to={`/${asdf.id}`}>
        <h1>{asdf.year}</h1>  
      </Link> 

      <Link to={`/year/edityear/${asdf.id}`}>
        <button>Edit Year</button>
      </Link>  
              
      <form onSubmit={handleDelete}>
        <input className='deleteYear'type='submit' value='Delete' />

      </form>
    </div>
  )
}

export default Year