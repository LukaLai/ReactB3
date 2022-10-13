// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInputForm from '../hooks/UseInputForm'


export default function Login () {
   const arrayUsers= [
    {id:1, username:'Luka', password:'s'}
   ]
   const navigate = useNavigate()
   
   const { 
    value: enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler, 
    reset: resetNameInput

  } = useInputForm(value => value.trim() !== ''); 

  let { 
    value: enteredPassword, 
    isValid: enteredPasswordIsValid, 
    hasError: passwordInputHasError, 
    valueChangeHandler: passwordChangedHandler, 
    inputBlurHandler: passwordBlurHandler, 
    reset: resetPasswordInput 

  } = useInputForm(value => value.trim() !== ''); 

  let formIsValid = false;  

  if (enteredNameIsValid && enteredPasswordIsValid) { 
    formIsValid = true; 
  } 
  const formSubmissionHandler = (event) => { 
    event.preventDefault();
    if (!enteredNameIsValid && !enteredPasswordIsValid) { 
      return; 
    }  

    //formisvalid
    
    if (arrayUsers.find(user => user.username === enteredName && user.password === enteredPassword)) {
      navigate('/Dashboard')
    }else{
      passwordInputHasError = true
    }

    resetNameInput();
    resetPasswordInput();
  }

    ///////////////////// Non utilisation du hook ///////////////////////
  /*
   const navigate = useNavigate()
   const [nameState, setNameState] = useState('')
   const [nameIsValid, setNameIsValid] = useState(false)
   const [nameIsTouched, setNameIsTouched] = useState(false)
   const [passwordState, setPaswordState] = useState('')
   const [passwordIsValid, setPasswordIsValid] = useState(false)

      const passwordChangeHandler = (e) => {
        setPaswordState(e.target.value)
        setPasswordIsValid(e.target.value ?true:false)
      }

      const nameChangeHandler = (e) => {
        setNameIsValid(e.target.value ?true:false)
        setNameState(e.target.value)
      }
    
      const nameBlurHandler = (e) => {
        setNameIsTouched(true);
    
        if(nameState.trim() === '') {
          setNameIsValid(false)
          return;
        }    
      };

      const formSubmissionHandler = (event) => {
        event.preventDefault()
        setNameIsTouched(true);
    
        if(nameState.trim() === '') {
          setNameIsValid(false)
          return;
        }

        if (arrayUsers.find(user => user.username === nameState && user.password === passwordState)) {
          navigate('/HomePage')
          return;
        }

        // .... traitement exemple: requete POST
        setNameState('');
        setPaswordState('');
      };

      const nameInputIsinvalid = !nameIsValid &&  nameIsTouched;
      const passwordInputIsinvalid = !passwordIsValid
    
   */ 
      return(
        <div className=" block ml-100
        . p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form onSubmit={formSubmissionHandler}>
    <div className="form-group mb-6 ">
      <label className="form-label inline-block mb-2 text-gray-700">Nom</label>
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        value={enteredName}
        onChange={nameChangedHandler} 
        onBlur={nameBlurHandler} id="Name"
        placeholder="Enter Name"/>
        
        {nameInputHasError && (
          <p className='error-text'>Name cannot be empty</p>
        )}

    </div>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Password</label>
      <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        value={enteredPassword}
        onChange={passwordChangedHandler}
        onBlur={passwordBlurHandler} 
        id="InputPassword"
        placeholder="Password"/>
           
           {passwordInputHasError && (
          <p className='error-text'>Error Password</p>
        )}

    </div>
    <button type="submit" className="
      px-6 py-2.5 m-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
      disabled={!formIsValid}>
        Submit
    </button>
  </form>
</div>     
    )
}