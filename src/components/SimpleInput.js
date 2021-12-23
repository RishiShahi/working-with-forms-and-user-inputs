import { useState } from "react";

const SimpleInput = (props) => {
  const [enterName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const enteredNameIsValid = enterName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched ;


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid){
      return;
    }
    console.log(enterName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };
  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enterName}
          />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;





//*** It is all about ref ***//

// const nameInputRef = useRef();
// const enteredValue = nameInputRef.current.value;
// ref={nameInputRef}

// console.log(enteredValue);
// nameInputRef.current.value='';
// console.log(nameInputRef.current === event.target);
// console.log(event);
// console.log(event.target);





// useEffect(() => {
  //   if(enteredNameIsValid){
    //     console.log('Name input is valid');
    //   }
    // }, [enteredNameIsValid])