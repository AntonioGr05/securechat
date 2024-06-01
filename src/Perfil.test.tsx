import { render, screen } from '@testing-library/react';
import Perfil from './pages/Perfil';
import '@testing-library/jest-dom/extend-expect';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
        }
    }
}

expect.extend({ toBeInTheDocument });

test('renders Perfil component', () => {
        render(<Perfil />);
        const perfilElement = screen.getByTestId('perfil');
        expect(perfilElement).toBeInTheDocument();
});

test('renders title in Perfil component', () => {
        render(<Perfil />);
        const titleElement = screen.getByText(/Perfil/i);
        expect(titleElement).toBeInTheDocument();
});

test('renders username in Perfil component', () => {
    render(<Perfil />);
    const usernameElement = screen.getByText(/username/i);
    expect(usernameElement).toBeInTheDocument();
});

