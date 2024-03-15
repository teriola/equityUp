import AppStyles from './App.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header'
import FinancePage from './pages/Finance/FinancePage';
import StocksPage from './pages/Stocks/StocksPage';
import Footer from './components/Footer/Footer';
import { useTheme } from './contexts/ThemeContext';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { publicRoute } from './hoc/publicRoute';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${AppStyles.appContainer} ${AppStyles[theme]}`}>
      <Header />

      <div className="main-content">
        <Routes>
          {/* Reroute to correct page */}
          <Route path="/" element={<Navigate to="/finance/transactions" />} />
          <Route path="/finance" element={<Navigate to="/finance/transactions" />} />

          <Route path="/stocks" element={<Navigate to="/stocks/one" />} />

          {/* Routes-------------------------------------------------------- */}
          <Route path="/finance/transactions" element={<FinancePage />} />
          <Route path="/finance/stats" element={<FinancePage />} />

          <Route path="/stocks/one" element={<StocksPage />} />
          <Route path="/stocks/two" element={<StocksPage />} />

          <Route path="/register" element={publicRoute(Register)} />
          <Route path="/login" element={publicRoute(Login)} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;