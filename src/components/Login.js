import './Login.css'
import { useState, useEffect } from 'react'

export default function Login () {
   // const nameInputRef = useRef();
    const [nameState, setNameState] = useState('default')
    const [nameIsValid, setNameIsValid] = useState(false)
    const [nameIsTouched, setNameIsTouched] = useState(false)
  
    useEffect(()=>{
        if (nameIsValid) console.log('name is Valid')
    }, [nameIsValid])
  
    const nameChangeHandler = (e) => {
      setNameState(e.target.value)
    }
  
    const nameBlurHandler = (e) => {
      setNameIsTouched(true);
  
      if(nameState.trim() === '') {
        setNameIsValid(false)
        return;
      }
  
    }
  
    const formSubmissionHandler = (event) => {
      event.preventDefault()
      setNameIsTouched(true);
  
      if(nameState.trim() === '') {
        setNameIsValid(false)
        return;
      }
      setNameIsValid(true);
  
  
      // .... traitement exemple: requete POST
  
      
      setNameState('');
    }
  
  
    const nameInputIsinvalid = !nameIsValid &&  nameIsTouched;
    //const nameInputClasses = nameInputIsinvalid ? 'form-control invalid' : 'form-control';
  

    return(
        <div class=" block ml-100 p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form onSubmit={formSubmissionHandler}>
    <div class="form-group mb-6 ">
      <label class="form-label inline-block mb-2 text-gray-700">Nom</label>
      <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={nameState}
        onChange={nameChangeHandler} 
        onBlur={nameBlurHandler} id="Name"
        placeholder="Enter Name"/>
        
        {nameInputIsinvalid && (
          <p className='error-text'>Name cannot be empty</p>
        )}

    </div>
    <div class="form-group mb-6">
      <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Password</label>
      <input type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Password"/>
    </div>
    <button type="submit" class="
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Submit</button>
      {nameState}
  </form>
</div>     
    )
}