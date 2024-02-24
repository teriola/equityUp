import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import FooterStyles from '../Footer.module.css';

function FinanceFooter() {
    const { theme } = useTheme();
    return (
        <>
            <li>
                <NavLink to="/finance/transactions" className={({ isActive }) => isActive ? FooterStyles.active : FooterStyles[theme]}>
                    <TransactionsIcon />
                    <span>Trans.</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/finance/stats" className={({ isActive }) => isActive ? FooterStyles.active : FooterStyles[theme]}>
                    <StatsIcon />
                    <span>Stats</span>
                </NavLink>
            </li>
        </>
    );
}
export default FinanceFooter;

const TransactionsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /> </svg>;
const StatsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /> </svg>;
