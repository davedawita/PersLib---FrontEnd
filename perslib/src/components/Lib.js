import {Link, useNavigate} from 'react-router-dom'

const Lib = ({perslib, deletePersLib}) => {
const navigate = useNavigate()

const handleDelete = (event) => {
  event.preventDefault()
  deletePersLib(perslib.id)
  navigate('/:title/:perslib')
}
return(
  <div>
  <Link to={`/perslib/${perslib.id}`}>
    {/* <h1>{perslib.image}</h1> */}
    <h1>{perslib.description}</h1>
    <h1>{perslib.date}</h1>
    <h1>{perslib.time}</h1>
  </Link>      
  <h2>{perslib.Body}</h2>
  <form onSubmit={handleDelete}>
    <input className='deletePerslib'type='submit' value='Delete Item' />

  </form>
</div>
)
}

export default Lib