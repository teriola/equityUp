import useCurrentPage from "../../hooks/useCurrentPage";
import FinanceFooter from "./FinanceFooter/FinanceFooter";
import StocksFooter from "./StocksFooter/StocksFooter";
import FooterStyles from './Footer.module.css';

function Footer() {
    const currentPage = useCurrentPage();

    return (
        <footer className={FooterStyles.footer}>
            <ul className={FooterStyles.list}>
                {currentPage == 'Finance' ? <FinanceFooter /> : <StocksFooter />}
            </ul>
        </footer>
    );
}
export default Footer;