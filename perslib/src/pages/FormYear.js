const FormYear = (props) => {
  return(
    <form className='FormTitle'>

        <input 
        type='number' 
        placeholder='Year' 
        class='textInput' 
        name='year'
        />
        
        <input 
        type='submit' 
        value={props.buttonLabel_title} 
        class='submitBtn'
        onClick={(event) => {event.preventDefault()}}
        />

      </form>
  )
};

export default FormYear
