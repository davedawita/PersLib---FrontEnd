import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const FormYear = (props) => {

  const navigate = useNavigate()
  const params = useParams()


  //Will get current year here for edit:
  const currentYear = useMemo(() => props.years.find(year => year.id === parseInt(params.id)), [params.id, props.years])

  const[formData3, setFormData3] = useState(
    props.formType === 'new_year' ? {
      Year: ''      
    }: {
      Year: currentYear.Year,      
      id: parseInt(currentYear.id)
    }
  )
  const handleChange = (event) => {
    setFormData3((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {     //Here, we need to bring our "event" object because we are waiting for that event on submit
    event.preventDefault()    //To disable default functionality with our form.
    props.handleSubmit(formData3, props.formType)
    //Then, after we submit everything here and we pass the information fetch, let's go ahead and navigate to '/':
    navigate('/')      //To go back to the years or home page.
  }


  return(
    <form className='FormTitle'>
        <h3 className = 'EditTitle'>Year</h3>
        <input className='input'
        type='number'
        onChange={handleChange}
        value={formData3.Year}
        name='year'
        />  
        
        <input 
        type='submit' 
        value={props.buttonLabel_year} 
        class='submitBtn'
        // onClick={(event) => {event.preventDefault()}}
        />

      </form>
  )
};

export default FormYear
