import { useNavigate } from 'react-router-dom';

let navigate = null;

export const useNavigation = () => {
  navigate = useNavigate();
};

export const getNavigation = () => navigate;
