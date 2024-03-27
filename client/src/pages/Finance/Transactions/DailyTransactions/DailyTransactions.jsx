import Transaction from '../Transaction/Transaction';
import DailyTransactionsStyles from './DailyTransactions.module.css';
import { useTheme } from '../../../../contexts/ThemeContext';

function DailyTransactions() {
  const { theme } = useTheme();
  return (
    <section className={`${DailyTransactionsStyles.card} ${DailyTransactionsStyles[theme]}`}>
      <div className={DailyTransactionsStyles.top}>
        <p>24.02.24 <span><strong>Sat</strong></span></p>
      </div>

      <Transaction />
      <Transaction />
    </section>
  );
}

export default DailyTransactions;
