import React from 'react'
import { 
  GoogleAuthProvider,
  signInWithPopup} 
from 'firebase/auth';
import {auth} from '../firebase'

export default function OthMethodsbtt() {

  const loginWithGoogle = async () => {
    const provider  = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider)
    console.log(response);
}

  return (
    <button className='GlowButtonLogin' onClick={loginWithGoogle}>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
        Ingresar con Google
    </button>
  )
}
