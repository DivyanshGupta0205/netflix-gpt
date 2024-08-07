import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null); 

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message)

    if(message) return;

    // sign in and sign up logic

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
      <div>
      <Header />
      <div className='absolute'> 
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"alt=""></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"} </h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className= "p-4 my-4 w-full bg-zinc-600" />}
        <input ref={email} type="text" placeholder="Email Address" className= "p-4 my-4 w-full bg-zinc-600" />  
        <input ref={password} type="password" placeholder="Password" className= "p-4 my-4 w-full bg-zinc-600" />
        <p className='text-red-500'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick = {toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
      </form>
      
    </div>
  )
}

export default Login
