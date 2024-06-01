<h1 align="center" id="title">SecureChat</h1>

<p align="center"><img src="https://socialify.git.ci/AntonioGr05/securechat/image?description=1&amp;descriptionEditable=Proyecto%20de%20especialidad.&amp;font=Source%20Code%20Pro&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit%20Board&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<p id="description">Este es un proyecto de especialidad en el cual se elabora una aplicacion de mensajeria enfocandose en brindar las mejores opciones en seguridad en la mensajeria.</p>

En este proyecto aplicamos frontend con react y vite, backend con firebase asi como la autenticacion de google.

En el login mandamos los datos a firebase y si el usuario no esta registrado lo registramos, si ya esta registrado lo logeamos, en el chat mostramos los chats que tenemos en local y en el perfil mostramos la informacion del usuario logeado.

<h2>🚀 Demo</h2>

[securechat-dusky.vercel.app](securechat-dusky.vercel.app)

<h2>Project Screenshots:</h2>

### Login

En esta vista podemos iniciar sesion con nuestra cuenta de google o indicando un correo y contraseñas validos, cumpliendo con un correo y una contraseña de minimo 8 caracteres.

<img src="https://i.ibb.co/pZ9pgg4/Captura-de-pantalla-2024-06-01-a-la-s-12-17-16-a-m.png" alt="project-screenshot" width="1000" height="500/">

### Chat

En esta vista podemos ver diferentes cosas, primeramente tenemos un menubar en la parte izquierda con diferentes opciones de las cuales solo dos estan activas, perfil y logout, en la de perfil nos redirige a la vista de perfil y en la de logout nos cierra la sesion y nos redirige a la vista de login, en la parte derecha los chats, estos chats estan declarados en un objeto en local, lo cual no tienen funcionalidad solo son front.

<img src="https://i.ibb.co/KrKzR1C/Captura-de-pantalla-2024-06-01-a-la-s-12-17-38-a-m.png" alt="project-screenshot" width="1000" height="500/">

### Perfil

En la vista del perfil obtenemos la informacion del usuario logeado, esta informacion la obtenemos de la autenticacion por medio de firebase. En esta vista podemos ver el nombre, correo y foto de perfil del usuario logeado.

Si el usuario se logeo con correo y contraseña no obtenemos la foto de perfil, ya que esta se obtiene por medio de google auth por lo cual si no se encuentra renderizamos una por defecto, al igual pasa con el display name, si no se encuentra mostramos el email con el que se registro.

<img src="https://i.ibb.co/FgDQgZZ/Captura-de-pantalla-2024-06-01-a-la-s-12-18-12-a-m.png" alt="project-screenshot" width="1000" height="500/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Firebase
*   vitetest

<h2>🛠️ Installation Steps:</h2>

<p>1. Clonar el Repositorio</p>

```
git clone https://github.com/AntonioGr05/securechat
```

<p>2. Instalar dependencias</p>

```
npm install
```

<p>3. Iniciar la aplicacion</p>

```
npm run dev
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Firebsae
*   GoogleAuth
*   react
*   vite

## Documentacion

En los archivos de codigo de nuestra aplicacion se encuentran comentarios que explican el funcionamiento de cada parte de nuestro codigo asi como en los test.

### Ejemplo de documentacion

<img src="https://i.ibb.co/zJvFTnH/Captura-de-pantalla-2024-06-01-a-la-s-12-44-40-a-m.png" alt="project-screenshot" width="1000" height="500/">


## Pruebas

Pruebas realizadas con vitetest.

### Ejemplo de pruebas

```ts
  import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Perfil from './Perfil';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { auth } from '../firebase';

// Se realiza un mock del módulo '../firebase'
vi.mock('../firebase', async () => {
  // Importa el objeto real del módulo especificado
  const actual = await vi.importActual<object>('../firebase');
  return {
    ...actual,
    auth: {
      ...(actual as { auth: typeof auth }).auth, // Se añade una aserción de tipo para acceder al objeto 'auth'
      onAuthStateChanged: vi.fn(() => () => {}), // Se simula la función onAuthStateChanged
      signOut: vi.fn(), // Se simula la función signOut
    },
  };
});

// Conjunto de pruebas para el componente 'Perfil'
describe('Perfil Component', () => {
  // Antes de cada prueba, se limpian todos los mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Prueba que verifica que el componente se renderiza correctamente
  it('should render the component correctly', () => {
    render(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    );

    // Se espera que los textos 'Regresar' y 'Cerrar sesión' estén en el documento
    expect(screen.getByText(/Regresar/i)).toBeInTheDocument();
    expect(screen.getByText(/Cerrar sesión/i)).toBeInTheDocument();
  });

  // Prueba que verifica que se llama a signOut cuando se hace clic en el botón de cierre de sesión
  it('should call signOut when logout button is clicked', () => {
    render(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    );

    // Se obtiene el botón de cierre de sesión y se hace clic en él
    const logoutButton = screen.getByText(/Cerrar sesión/i);
    fireEvent.click(logoutButton);

    // Se espera que se haya llamado a la función signOut
    expect(auth.signOut).toHaveBeenCalled();
  });
});
```

Primero, se realiza un "mock" del módulo ../firebase para poder controlar el comportamiento del objeto auth y sus métodos en las pruebas. Se simulan las funciones onAuthStateChanged y signOut del objeto auth.

Las dos pruebas incluidas en el describe son:

Prueba que verifica que el componente se renderiza correctamente: se renderiza el componente Perfil dentro de un MemoryRouter y se verifica que los textos "Regresar" y "Cerrar sesión" se encuentren en el documento.

Prueba que verifica que se llama a signOut cuando se hace clic en el botón de cierre de sesión: se renderiza el componente Perfil dentro de un MemoryRouter, se obtiene el botón de cierre de sesión y se simula un evento de clic en él. Se verifica que la función signOut ha sido llamada.

Antes de cada prueba, se ejecuta vi.clearAllMocks() para asegurar que se reinicien todos los mocks y no interfieran entre ellas.