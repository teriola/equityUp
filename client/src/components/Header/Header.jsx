import HeaderStyles from './Header.module.css';
import useCurrentPage from '../../hooks/useCurrentPage';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from '../../contexts/AuthContext';
import Avatar from './Avatar/Avatar';

function Header() {
    const currentPage = useCurrentPage();
    // const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { auth } = useAuth();

    // const togglePages = () => {
    //     if (currentPage === 'Finance') navigate('/stocks');
    //     else navigate('/finance');
    // }

    return (
        <header data-testid='header' className={`${HeaderStyles.header} ${HeaderStyles[theme]}`}>
            <div className={HeaderStyles.left}>
                <h1>{currentPage}</h1>
                {/* onClick={togglePages} */}
                {/* <svg className={HeaderStyles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M6 9l6 6 6-6" />
                </svg> */}
            </div>
            <p onClick={toggleTheme}>{theme}</p>

            <SearchIcon />
            <Avatar auth={auth} />
        </header>
    );
}

const SearchIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}

export default Header