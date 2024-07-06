import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const FormPerslib = (props) => {
  const navigate = useNavigate()
  const params = useParams()


  //Will get current document (perslib item) here for edit:
  const currentDoc = useMemo(() => props.perslibs.find(perslib => perslib.id === parseInt(params.id)), [params.id, props.perslibs])

  const[formData, setFormData] = useState(
    props.formType === 'newperslib' ? {
      description: '',
      date: '',
      time: ''
    }: {
      Description: currentDoc.description,
      date: currentDoc.date,
      time: currentDoc.time,
      id: parseInt(currentDoc.id)
    }
  )
  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {     //Here, we need to bring our "event" object because we are waiting for that event on submit
    event.preventDefault()    //To disable default functionality with our form.
    props.handleFormPerslib(formData, props.formType)
    //Then, after we submit everything here and we pass the information fetch, let's go ahead and navigate to '/':
    navigate('/:title/:perslib')      //To go back to the perslibs page.
  }

  return(
  

    <form  onSubmit={handleSubmission} className='Form'>

        <h3 className = 'EditTitle'>Description</h3>
        <input className='input'
        type='text'
        onChange={handleChange}
        value={formData.description}
        name='description'
        />

        <h3 className = 'EditTitle'>Date</h3>
        <input className='input'
        type='date'
        onChange={handleChange}
        value={formData.date}
        name='date'
        />

        <h3 className = 'EditTitle'>Time</h3>
        <input className='input'
        type='time'
        onChange={handleChange}
        value={formData.time}
        name='time'
        />         
        
        <input 
        type='submit' 
        value={props.buttonLabel_perslib} 
        className='submitBtn'
        // onClick={(event) => {event.preventDefault()}}
        />

      </form>
  )
};

export default FormPerslib