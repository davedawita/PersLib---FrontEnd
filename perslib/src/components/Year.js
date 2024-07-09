import {Link, useNavigate} from 'react-router-dom'

const Year = ({asdf, deleteYear}) => { 
  const navigate = useNavigate()  

  const handleDelete = (event) => {
    event.preventDefault()
    deleteYear(asdf.id)
    navigate('/')
  }

  return(    
    <div>      
      <Link to={`/year/${asdf.id}`} >
        <h1>{asdf.year}</h1>
      </Link>      
              
      <form onSubmit={handleDelete}>
        <input className='deleteYear'type='submit' value='Delete' />
      </form>

    </div>      
  )
}

export default Year

// style={{height: '60px', overflow: 'scroll', width: '250px', color:'black', backgroundColor: 'rgb(75, 0, 130)', borderRadius: '30px'}}