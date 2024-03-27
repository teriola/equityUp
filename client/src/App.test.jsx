import App from './App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

// Wraps the App component in all the providers it needs to function
const AllProviders = ({ useBrowserRouter = true, children }) => {
  const Providers = ({ children }) => (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );

  return useBrowserRouter ? (
    <BrowserRouter>
      <Providers>
        {children}
      </Providers>
    </BrowserRouter>
  ) : (
      <Providers>
        {children}
      </Providers>
    );
}

describe('App', () => {
  test('App component renders without crashing', () => {
    render(
      <AllProviders>
        <App />
      </AllProviders>
    )
  });

  // test('Contains expected routes', () => {
  //     const routes = [
  //         { path: '/', uniqueText: '' },
  //         { path: '/finance', uniqueText: 'Unique text from Finance component' },
  //         { path: '/finance/transactions', uniqueText: 'Unique text from Transactions component' },
  //         { path: '/finance/stats', uniqueText: 'Unique text from Stats component' },
  //         { path: '/stocks', uniqueText: 'Unique text from Stocks component' },
  //         { path: '/stocks/one', uniqueText: 'Unique text from StocksOne component' },
  //         { path: '/stocks/two', uniqueText: 'Unique text from StocksTwo component' },
  //         { path: '/register', uniqueText: 'Unique text from Register component' },
  //         { path: '/login', uniqueText: 'Unique text from Login component' },
  //     ];

  //     routes.forEach(({ path, uniqueText }) => {
  //         render(
  //             <MemoryRouter initialEntries={[path]}>
  //                 <AllProviders useBrowserRouter={false}>
  //                     <App />
  //                 </AllProviders>
  //             </MemoryRouter>
  //         );

  //         expect(screen.getByText(uniqueText)).toBeInTheDocument();
  //     });
  // });

  test('Contains Header and Footer components', () => {
    render(
      <AllProviders>
        <App />
      </AllProviders>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });


});
