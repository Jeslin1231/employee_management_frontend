import type react from 'react';
import { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks';
import { selectRole, selectLoginStatus } from '@/features/auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: react.ReactNode;
}

const ProtectedRoute: react.FC<ProtectedRouteProps> = props => {
  const role = useAppSelector(selectRole);
  const status = useAppSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (!status) {
      navigate('/login');
    } else if (role !== 'hr') {
      navigate('/error');
    }
  }, [role, status, navigate]);

  return <>{props.element}</>;
};

export default ProtectedRoute;
