import { useState } from 'react'; 

// Hook qui permet d'etre utiliser sur chaque input avec des parametres par defaut ce qui permet d'utiliser 
// plusieurs input avec le meme code

export default function useInputForm (validateValue) { 

  const [enteredValue, setEnteredValue] = useState(''); 
  const [isTouched, setIsTouched] = useState(false); 
  const valueIsValid = validateValue(enteredValue); 
  let hasError = !valueIsValid && isTouched; 
  
  const valueChangeHandler = (event) => { 
    setEnteredValue(event.target.value); 
  }; 

  const inputBlurHandler = (event) => { 
    setIsTouched(true); 
  }; 

  const reset = () => { 
    setEnteredValue(''); 
    setIsTouched(false); 
  }; 
 
  return { 

  value: enteredValue, 
  isValid: valueIsValid, 
  hasError, 
    valueChangeHandler, 
    inputBlurHandler, 
    reset 
  }; 
}; 

