import firebase from 'firebase/compat/app';
import '../css/perfil.css'
import { auth } from '../firebase'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import { signOut} from 'firebase/auth';
export default function Perfil() {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const logout = async () => {
    const response = await signOut(auth)
    console.log(response);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  

  return (
    <section className="container">
        <div className='header'>
        <Link className='regresar' to={'/'}>
          <div className='regresar_div'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3YTypFYRjA4TcxwMDMAizAAqyAyECsgwUwYgmyAcqcWAAxZGyC8m9AZiZKj27IdR11ldJ7e58VnF/fOd/3fieilFJKKaWUv4RZ3OAB85ERpvDs031kgwk8+eouMsE4HjsiXrAQWWAMt75bjCwwirOGiOXIAiM4bYhYjywwhMOGiE30RQYYwH5DxA76IwP0Ybsh4qi1SpEFNuRz0Tqo2yPW5HXdHrKqF0ISv1rnmIwuP/ZjDEcm3rbfvYaY3TTb7wcM4qAhZivNgdgxopykHlG6GBpXIhs/j/FLkY2fL1Zz0SNX3cvokZ8PV5EVZt4HtStM//fzlFJKKaWUEr/xCv1K5URiSFSXAAAAAElFTkSuQmCC"></img>
              <p>Regresar</p>
          </div>
        </Link>
        </div>
        <div className='perfil'>
            <div className='perfil__header'>
                <div className="img_perfil">
                  <h3></h3>
                  {currentUser && <img src={(currentUser as firebase.User).photoURL || 'https://randomuser.me/api/portraits/lego/1.jpg'} alt="Imagen de perfil" />}
                </div>
                <h3>
                {currentUser && <p>{(currentUser as firebase.User).displayName || currentUser.email}</p>}
                </h3>
                
            </div>
            <div className='perfil__body'>
              <div className='perfil_datos'>
                <p>Correo:    </p>
                {currentUser && <p>{currentUser.email}</p>}
              </div>
              <div className="perfil_datos">
                <p>Numero Telefonico:    </p>
                {currentUser && <p>{currentUser.phoneNumber}</p>}
              </div>
              <div className="perfil_datos">
                <p>Inicio Sesion con:    </p>
                <p>{currentUser && currentUser.providerData && currentUser.providerData.map((provider) => provider.providerId).join(', ')}</p>
                
              </div>
              <div className="perfil_datos">
                <p>Fecha de creación:    </p>
                {currentUser && <p>{(currentUser as firebase.User).metadata.creationTime}</p>}
              </div>
              <div className="perfil_datos">
                <p>Última vez que inició sesión:  </p>
                {currentUser && <p>{(currentUser as firebase.User).metadata.lastSignInTime}</p>}
              </div>
              <div className='perfil__footer'>
                <button className='perfil__footer__btn' onClick={logout}>Cerrar sesión</button>
              </div>
            </div>
        </div>
    </section>
  )
}
