import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from '../redux/slices/userSlice'

export default function Google() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goHome = () =>{
    navigate('/home')
  }
  
  const responseGoogle = async (response) => {
    await dispatch(setUser(response.profileObj))
    goHome()
  };


  return (
    <>
      <GoogleLogin
        clientId="263279110234-ru6tluh63pcch27t84ldqkostpjiv824.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className='google-button'
        // onClick={}
      >
      <span className='login-button'>
        Sign in with Google
      </span>
      </GoogleLogin>
    </>
  );
}
