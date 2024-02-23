import AppStyles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import FinancePage from './pages/Finance/FinancePage';
import StocksPage from './pages/Stocks/StocksPage';
import Footer from './components/Footer/Footer';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${AppStyles.appContainer} ${AppStyles[theme]}`}>
      <Header />

      <h1 onClick={toggleTheme}>{theme}</h1>
      <div className="main-content">
        <Routes>
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/finance/transactions" element={<FinancePage />} />
          <Route path="/finance/stats" element={<FinancePage />} />

          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/stocks/one" element={<StocksPage />} />
          <Route path="/stocks/two" element={<StocksPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App