// Date: 03/08/21
import '../css/glowinbutton.css'
import '../index.css';
import '../css/login.css';
import {auth} from '../firebase'
import OTHMETHODSBTT from '../components/othmethodsbtt';
import { useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged}
from 'firebase/auth';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmitLogin = (event: React.FormEvent) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Por favor, rellena todos los campos correctamente');
        } else if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
        } else {
            setError('');
            console.log('Email:', email);
            login(email, password);
        }
    };

    const handleSubmitRegister = (event: React.FormEvent) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Por favor, rellena todos los campos correctamente');
        } else if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
        } else {
            setError('');
            console.log('Email:', email);
            register(email, password);
        }
    };

    const register = async (email: string, password: string) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            // Aquí puedes establecer el estado de un mensaje de error en tu componente,
            // o mostrar un mensaje de error de alguna otra manera.
            setError('El correo ya esta en uso.');
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.error("Correo o contraseña incorrectos", error);
            // Aquí puedes establecer el estado de un mensaje de error en tu componente,
            // o mostrar un mensaje de error de alguna otra manera.
            setError('El correo o la contraseña son incorrectos.');
        }
    }

    const handleRegisterMode = () => {
        setIsRegister(!isRegister);
        // cambiar el hide por le show
        const loginBox = document.querySelector('.LoginBox');
        const registerBox = document.querySelector('.RegisterBox');
        if (isRegister) {
            loginBox?.classList.remove('hide');
            registerBox?.classList.add('hide');
        } else {
            loginBox?.classList.add('hide');
            registerBox?.classList.remove('hide');
        }
    }

    

  return (
    <section className='container'>
        <div className='LoginBox'>
            <h1 className='LoginBox__title'>SecureChat</h1>
            <div className="cursor message">
                <h1>The Messaging is security-focused to protect our clients' data.</h1>
                
            </div>
            <div>
            </div>
            <form className='LoginBox__form' onSubmit={handleSubmitLogin}>
                <div className="form__inputs">
                    <input type='email' placeholder='Email' className='LoginBox__input' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Password' className='LoginBox__input'  value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <p className='errorInput'>{error}</p>}
                </div>
                <button type='submit' className='LoginBox__button'>Iniciar Sesion</button>
            </form>
            <div className="LoginBox_othersmethods">
                <OTHMETHODSBTT />
            </div>
            <div className='Regs'>
                <p>Aun no tienes cuenta? <span className='Registro' onClick={handleRegisterMode}>Registrate</span></p>
            </div>
        </div>
        {/* *********REGISTER********** */}
        <div className='RegisterBox hide'>
            <h1 className='LoginBox__title'>SecureChat</h1>
            <div className="cursor message">
                <h1>The Messaging is security-focused to protect our clients' data.</h1>
                
            </div>
            <div>
            </div>
            <form className='LoginBox__form' onSubmit={handleSubmitRegister}>
                <div className="form__inputs">
                    <input type='email' placeholder='Email' className='LoginBox__input' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Password' className='LoginBox__input'  value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <p className='errorInput'>{error}</p>}
                </div>
                <button type='submit' className='LoginBox__button'>Registrarte</button>
            </form>
            <div className="LoginBox_othersmethods">
                <OTHMETHODSBTT />
            </div>
            <div className='Regs'>
                <p>Ya tienes cuenta? <span className='Registro' onClick={handleRegisterMode}>Inicia Sesion</span></p>
            </div>
        </div>
    </section>
  )
}
