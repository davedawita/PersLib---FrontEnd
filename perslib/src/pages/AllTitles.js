import Title from '../components/Title'
import {Link} from 'react-router-dom'

const AllTitles = (props) => {  
  
  return(
    <div>
      <Link to='/newtitle'>
        <button className='addTitle'> Add Title </button>
      </Link>

      {props.titles.map((post) => <Title post={post} key={post.id} deleteTitle={props.deleteTitle} />)}      
    </div>
  ) 
}


export default AllTitles

