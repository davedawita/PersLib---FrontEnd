import {useMemo} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'

const Year = ({asdf, deleteYear, years}) => {
const navigate = useNavigate()

const params = useParams()
  
// const currentYear = useMemo(() => years.find(year => year.id === parseInt(params.id)), [params.id, years])

const handleDelete = (event) => {
  event.preventDefault()
  deleteYear(asdf.id)
  navigate('/')
}
return(
  <div>
    <Link to={`/${asdf.id}`}>
      <h1>{asdf.year}</h1>
    </Link> 

     {/* <h2>{currentYear.year}</h2>    */}

    <Link to={`/edityear/${params.id}`}>
        <button>Edit Year</button>
    </Link>
            
  <form onSubmit={handleDelete}>
    <input className='deleteYear'type='submit' value='Delete' />

  </form>
</div>
)
}

export default Year