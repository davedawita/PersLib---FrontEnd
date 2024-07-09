import Title from '../components/Title'
import {Link} from 'react-router-dom'


const AllTitles = (props) => {  
  
  return(
    <div>
      <Link to='/newtitle'>
          <button className='addTitle'>Add Title</button>
      </Link>      
      
      {props.titles?.map((abcd) => <Title abcd={abcd} key={abcd.id} deleteTitle={props.deleteTitle} />)}
      
    </div>
  )    
}

export default AllTitles

