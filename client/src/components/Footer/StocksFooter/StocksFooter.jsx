import { NavLink } from 'react-router-dom';
import FooterStyles from '../Footer.module.css';
import { useTheme } from "../../../contexts/ThemeContext";


function StocksFooter() {
  const { theme } = useTheme();
  return (
    <>
      <li>
        <NavLink to="/stocks/one" className={({ isActive }) => isActive ? FooterStyles.active : FooterStyles[theme]}>
          <span>one</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/stocks/two" className={({ isActive }) => isActive ? FooterStyles.active : FooterStyles[theme]}>
          <span>two</span>
        </NavLink>
      </li>
    </>
  );
}
export default StocksFooter;
