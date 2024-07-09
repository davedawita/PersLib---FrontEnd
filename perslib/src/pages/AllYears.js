import Year from '../components/Year'
import {Link} from 'react-router-dom'


const AllYears = (props) => {  
  
  return(
    
      <div>
        <Link to='/newyear'>
          <button className='addYear'>Add Year</button>
        </Link>    
        <Link to='/logout'>
          <button className='logout'>LOG OUT</button>
        </Link>        

        {props.years.map((asdf) => <Year asdf={asdf} key={asdf.id}  deleteYear={props.deleteYear} />)} 

      </div>              
    
  ) 
      
}
 
export default AllYears


