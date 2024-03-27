import Hud from "./Transactions/Hud/Hud";
import Transactions from "./Transactions/Transactions";
import FinanceStyles from "./FinancePage.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function FinancePage() {
  const { pathname } = useLocation();
  const [currentTab, setCurrentTab] = useState('transactions');

  useEffect(() => {
    const pathSegments = pathname.split('/');
    setCurrentTab(pathSegments[pathSegments.length - 1]);
  }, [pathname]);

  return (currentTab === 'transactions' ?
    <>
      <Hud />
      <Transactions />
    </> :
    <>
      <h1>Stats</h1>
    </>
  );
}

export default FinancePage;
