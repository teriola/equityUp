import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import FinancePage from './pages/Finance/FinancePage';
import StocksPage from './pages/Stocks/StocksPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/finance/transactions" element={<FinancePage />} />
          <Route path="/finance/stats" element={<FinancePage />} />

          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/stocks/nav1" element={<StocksPage />} />
          <Route path="/stocks/nav2" element={<StocksPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App