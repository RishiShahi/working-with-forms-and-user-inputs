import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "");

 const {value: enteredEmail, 
  isValid:enteredEmailIsValid,
  hasError: emailInputHasError,
  valueChangeHandler: emailChangeHandler,
  inputBlurHandler: emailBlurHandler,
  reset: resetEmailInput } = useInput(value => value.include("@"));
  
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };
  
  const nameInputClasses = nameInputHasError
  ? "form-control invalid"
  : "form-control";
  
  const inputEmailStyles = emailInputHasError
  ? "form-control invalid"
  : "form-control";
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
          )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;



  // const [enterName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const enteredNameIsValid = enterName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const enteredEmailIsValid = enteredEmail.include("@");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

// const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);};
  // const nameInputBlurHandler = (event) => {
    //   setEnteredNameTouched(true);  };
    // const emailInputChangeHandler = (event) => {
      //   setEnteredEmail(event.target.value);};
      // const emailInputBlurHandler = (event) => {
        //   setEnteredEmailTouched(true);};
        // setEnteredNameTouched(true);
        // setEnteredName("");
        // setEnteredNameTouched(false);
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
