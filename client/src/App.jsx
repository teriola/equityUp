import AppStyles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import FinancePage from './pages/Finance/FinancePage';
import StocksPage from './pages/Stocks/StocksPage';
import Footer from './components/Footer/Footer';
import { useTheme } from './contexts/ThemeContext';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${AppStyles.appContainer} ${AppStyles[theme]}`}>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/finance/transactions" element={<FinancePage />} />
          <Route path="/finance/stats" element={<FinancePage />} />

          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/stocks/one" element={<StocksPage />} />
          <Route path="/stocks/two" element={<StocksPage />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App