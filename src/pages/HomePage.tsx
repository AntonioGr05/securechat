import React from 'react'
import '../css/homepage.css'
import { signOut} from 'firebase/auth';
import {auth} from '../firebase'

export default function HomePage() {

  const logout = async () => {
    const response = await signOut(auth)
    console.log(response);
  }

  return (
    <section className='Container'> 
      <h1>Home Page</h1>
      <button onClick={logout}>logout</button>
    </section>
  )
}
