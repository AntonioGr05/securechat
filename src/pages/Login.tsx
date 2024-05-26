// Date: 03/08/21
import '../css/glowinbutton.css'

import '../index.css';
import '../css/login.css';

import OTHMETHODSBTT from '../components/othmethodsbtt';

export default function Login() {
  return (
    <section className='container'>
        <div className='LoginBox'>
            <h1 className='LoginBox__title'>SecureChat</h1>
            <div className="cursor message">
                <h1>The Messaging is security-focused to protect our clients' data.</h1>
            </div>
            <form className='LoginBox__form'>
                <div className="form__inputs">
                    <input type='email' placeholder='Email' className='LoginBox__input' />
                    <input type='password' placeholder='Password' className='LoginBox__input' />
                </div>
                <button type='submit' className='LoginBox__button'>Ingresar</button>
            </form>
            <div className="LoginBox_othersmethods">
                <OTHMETHODSBTT />
            </div>
        </div>
    </section>
  )
}
