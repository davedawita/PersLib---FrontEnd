import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const FormTitle = (props) => {

  const navigate = useNavigate()
  const params = useParams()


  //Will get current title here for edit:
  const currentTitle = useMemo(() => props.titles.find(title => title.id === parseInt(params.id)), [params.id, props.titles])

  const[formData2, setFormData2] = useState(
    props.formType === 'newtitle' ? {
      title: ''      
    }: {
      title: currentTitle.title,      
      id: parseInt(currentTitle.id)
    }
  )
  const handleChange = (event) => {
    setFormData2((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {     //Here, we need to bring our "event" object because we are waiting for that event on submit
    event.preventDefault()    //To disable default functionality with our form.
    props.handleFormTitle(formData2, props.formType)
    //Then, after we submit everything here and we pass the information fetch, let's go ahead and navigate to '/':
    navigate('/title')      //To go back to the titles page.
  }

  return(
    <form  onSubmit={handleSubmission} className='FormTitle'>
        <h3 className = 'EditTitle'>Title</h3>
        <input className='input'
        type='text'
        onChange={handleChange}
        value={formData2.title}
        name='title'
        />     
                
        <input 
        type='submit' 
        value={props.buttonLabel_title} 
        class='submitBtn'
        // onClick={(event) => {event.preventDefault()}}
        />

      </form>
  )
};

export default FormTitle
