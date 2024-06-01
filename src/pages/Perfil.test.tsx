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