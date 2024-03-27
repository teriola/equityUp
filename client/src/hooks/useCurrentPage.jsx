import { useLocation } from 'react-router-dom';

const useCurrentPage = () => {
  const location = useLocation();
  const pathnameParts = location.pathname.split('/').filter(Boolean);

  // If there is no location or pathnameParts is empty, return 'Finance'
  if(!location || pathnameParts.length === 0) return 'Finance';

  return pathnameParts[0].charAt(0).toUpperCase() + pathnameParts[0].slice(1);
};

export default useCurrentPage;
