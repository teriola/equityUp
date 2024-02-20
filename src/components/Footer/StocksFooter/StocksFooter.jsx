import { NavLink } from 'react-router-dom';
import './StocksFooter.css';

function StocksFooter() {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to="/stocks/nav1">
                        <span>Nav1</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stocks/nav2">
                        <span>Nav2</span>
                    </NavLink>
                </li>
            </ul>
        </footer>
    );
}
export default StocksFooter;