import {Link, useNavigate} from 'react-router-dom'

const Title = ({post, deleteTitle}) => {
const navigate = useNavigate()

const handleDelete = (event) => {
  event.preventDefault()
  deleteTitle(post.id)
  navigate('/:id')
}
return(
  <div>
    {/* <Link to={`/${post.id}`}>
      <h1>{post.title}</h1>
    </Link>         */}
  <form onSubmit={handleDelete}>
    <input className='deleteTitle'type='submit' value='Delete' />

  </form>
</div>
)
}

export default Title