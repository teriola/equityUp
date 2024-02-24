import Hud from "../../components/Hud/Hud";
import './FinancePage.css';
import Transactions from "../../components/Transactions/Transactions";

function FinancePage() {
    return (
        <>
            <Hud />
            <Transactions />
        </>
    );
}

export default FinancePage;