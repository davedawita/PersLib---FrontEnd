import PersLib from '../components/Lib'
import {Link} from 'react-router-dom'

const AllPerslibs = (props) => {   //This function defines all the perslib or data items such as pictures, docs, etc.
  <>
    <Link to='/newperslib'>
      <button className='addDoc'> Add an Item </button>
    </Link>
    
    {props.perslibs.map(
      (lib) => <PersLib lib={lib} key={lib.id} deletePersLib={props.deletePersLib} />
    )}

  </>
  
};

export default AllPerslibs
