// import {useMemo} from 'react'
// import {Link, useParams} from 'react-router-dom'

// const SingleYear = ({years}) => {
//   const params = useParams()
  
//   const currentYear = useMemo(() => years.find(year => year.id === parseInt(params.id)), [params.id, years])

//   return (
//     <div>
//       <h2>{currentYear.year}</h2>   
      

//       <Link to={`/edityear/${params.id}`}>
//         <button>Edit Year</button>
//       </Link>
//       <Link to={'/'}>
//         <button>Go Back</button>
//       </Link>
//     </div>
//   )
// }

// export default SingleYear