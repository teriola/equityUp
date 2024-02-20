import useCurrentPage from "../../hooks/useCurrentPage";
import FinanceFooter from "./FinanceFooter/FinanceFooter";
import StocksFooter from "./StocksFooter/StocksFooter";

function Footer() {
    const currentPage = useCurrentPage();

    return currentPage === 'Finance' ? <FinanceFooter /> : <StocksFooter />;
}
export default Footer;