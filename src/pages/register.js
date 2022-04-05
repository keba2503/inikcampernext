import { useState } from 'react'
import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import * as firebases from "firebase/auth";
import Link from 'next/link';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { getFirestore, doc, setDoc } from "firebase/firestore";
import initAuth from '../initAuth';

function Register() {
  const firestore = getFirestore(initAuth());
  const rol = 'user'
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
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
      console.log(rol)
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(firebases.getAuth(), email, password)
        .then(() => {
          sendEmailVerification(firebases.getAuth().currentUser)
            .then(() => {
              window.alert('Usuario registrado.');
              const docuRef = doc(firestore, `usuarios/${firebases.getAuth().currentUser.uid}`);
              setDoc(docuRef, { correo: email, rol: rol, nombre: name , apellido: lastname, fechaNacimiento: age});
            }).catch((err) => alert(err.message))

        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setName('')
    setLastname('')
    setAge('')
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
                <label>
                  Nombre:
                  <input
                    type='text'
                    value={name}
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                  />
                </label>
                <label>
                Apellido
                <input
                  type='text'
                  value={lastname}
                  required
                  placeholder="Last Name"
                />
                 </label>
                 <label>
                 Fecha de nacimiento
                <input
                  type='date'
                  value={age}
                  required
                  placeholder="Age"
                /> 
                </label>

                <label>
                  Correo electronico:
                  <input
                    type='email'
                    value={email}
                    placeholder="Enter your email"
                    required
                    onChange={e => setEmail(e.target.value)} />
                </label>
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
              <div className='parr-login'>     <p>¿Ya Tiene una cuenta?</p>
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