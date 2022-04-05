import { useState } from 'react'
import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import * as firebases from "firebase/auth";
import Link from 'next/link';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'


function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')


  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(firebases.getAuth(), email, password)
        .then(() => {
          sendEmailVerification(firebases.getAuth().currentUser)
            .then(() => {
              window.alert('Usuario registrado.');
            }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <div className='login'>
          <div class="login-page">
            <div class="form-login">
              <div className="faq-form-title-wrapper text-center">
                <h5 className="faq-form-title">Registro</h5>
              </div>


              <form onSubmit={register} name='registration_form'>
                <input
                  type='text'
                  value={name}
                  required
                  placeholder="Name"
                />
                  <input
                  type='text'
                  value={name}
                  required
                  placeholder="Last Name"
                />
                
                     <input
                  type='date'
                  value={name}
                  required
                  placeholder="Age"
                />
                <input
                  type='email'
                  value={email}
                  placeholder="Enter your email"
                  required
                  onChange={e => setEmail(e.target.value)} />

                <input
                  type='password'
                  value={password}
                  required
                  placeholder='Enter your password'
                  onChange={e => setPassword(e.target.value)} />

                <input
                  type='password'
                  value={confirmPassword}
                  required
                  placeholder='Confirm password'
                  onChange={e => setConfirmPassword(e.target.value)} />

                <button type='submit'>Registrar</button>
              </form>
              {error && <div className='auth__error'>{error}</div>}
              <div className='parr-login'>
                <p>¿Ya Tiene una cuenta?</p>


                <Link href='/login'>Iniciar Sesión</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Register