import { NavLink } from 'react-router-dom';
import FooterStyles from './StocksFooter.module.css';

function StocksFooter() {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to="/stocks/nav1" className={({ isActive }) => isActive ? FooterStyles.active : ''}>
                        <span>Nav1</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stocks/nav2" className={({ isActive }) => isActive ? FooterStyles.active : ''}>
                        <span>Nav2</span>
                    </NavLink>
                </li>
            </ul>
        </footer>
    );
}
export default StocksFooter;