import App from './App';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

// Wraps the App component in all the providers it needs to function
const AllProviders = ({ children }) => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

test('App component renders', () => {
    render(AllProviders(App));
});