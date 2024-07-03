import {Link, useNavigate} from 'react-router-dom'

const Lib = ({lib, deleteLib}) => {
const navigate = useNavigate()

const handleDelete = (event) => {
  event.preventDefault()
  deleteLib(lib.id)
  navigate('/')
}
return(
  <div>
      LIB
    {/* <Link to={`lib/${lib.id}`}>
    <h1>{lib.Title}</h1>
    </Link>

    <h2>{lib.Body}</h2>

    <form onSubmit={handleDelete}>
      <input type='submit' value='Delete' />
    </form> */}

  </div>
)
}

export default Lib