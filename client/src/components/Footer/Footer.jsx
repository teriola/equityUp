import useCurrentPage from "../../hooks/useCurrentPage";
import FinanceFooter from "./FinanceFooter/FinanceFooter";
import StocksFooter from "./StocksFooter/StocksFooter";
import FooterStyles from './Footer.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function Footer() {
  const currentPage = useCurrentPage();
  const { theme } = useTheme();

  return (
    <footer data-testid='footer' className={`${FooterStyles.footer} ${FooterStyles[theme]}`}>
      <ul className={FooterStyles.list}>
        {currentPage == 'Finance' ? <FinanceFooter /> : (currentPage === 'Stocks' ? <StocksFooter /> : null)}
      </ul>
    </footer>
  );
}
export default Footer;
