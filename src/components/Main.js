import React, { useState } from 'react'


function Main() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [errorIcon, setErrorIcon] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (e) => {
    const email = e.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      // setMessage('Your email looks good!');
      setErrorIcon()
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
      setErrorIcon(<img src='./images/icon-error.svg' alt='bg'/>)
    }
    
  };
  const changeButtonColor = (e) => {
    e.target.style.background = 'red';
    e.target.style.cursor = 'pointer';
    e.target.style.boxShadow = '0px 5px 5px 0px pink';
    e.target.style.border = '1px pink solid';
  };
  
  
  return (
    <div className='main'>    
      <p className='text pink-text first-p'>
        WE'RE
      </p>
      <p className='text black-text second-p'>
        COMING SOON
      </p>
      <p className='text pink-text third-p'>
        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. 
      </p>
      <form onSubmit={handleSubmit}>
        {/* <label>
          <input type="text" name="email" placeholder="Email address" />
        </label>    */}
        <input type="email"
          placeholder="Enter your email"
          className="email-input"
          onChange={validateEmail}/>
        <button className="submitImage" onClick={changeButtonColor} >
          <img className="icon-arrow" src='./images/icon-arrow.svg' alt='icon-arrow'/>
        </button>
        <div className={`errorIcon ${isValid ? 'success' : 'error'}`}>
          {errorIcon}
        </div>
        <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
        </div>

      </form>     
    </div>
  )
}
export default Main