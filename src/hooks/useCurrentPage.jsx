import { useLocation } from 'react-router-dom';

const useCurrentPage = () => {
    const location = useLocation();
    const pathnameParts = location.pathname.split('/').filter(Boolean);
    return pathnameParts[0].charAt(0).toUpperCase() + pathnameParts[0].slice(1);
};

export default useCurrentPage;