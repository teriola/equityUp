import './Header.css'
import useCurrentPage from '../../hooks/useCurrentPage';
import { useNavigate } from 'react-router-dom';

function Header() {
    const currentPage = useCurrentPage();
    const navigate = useNavigate();

    const togglePages = () => {
        if (currentPage === 'Finance') navigate('/stocks');
        else navigate('/finance');
    }

    return (
        <div className="header">
            <div className="left">
                <h1 onClick={togglePages}>{currentPage}</h1>
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <div className="avatar-container">
                <img className="avatar-image" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'} alt="Avatar image" />
            </div>
        </div>
    );
}
export default Header