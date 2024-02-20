import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import FinancePage from './pages/Finance/FinancePage';
import StocksPage from './pages/Stocks/StocksPage';

function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/stocks" element={<StocksPage />} />
      </Routes>
    </div>
  );
}

export default App