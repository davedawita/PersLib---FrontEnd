import Year from '../components/Year'
import {Link} from 'react-router-dom'

const AllYears = (props) => {  

  return(
    <div>
      <Link to='/year/newyear'>
        <button className='addYear'>Add Year</button>
      </Link>     

      {props.years.map((asdf) => <Year asdf={asdf} key={asdf.id}  deleteYear={props.deleteYear} handleFormYear={props.handleFormYear} />)}

   </div> 
  )     
}

export default AllYears


