// components/RoleBasedComponent.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RoleBasedComponent = ({ role, children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== role) {
      router.push('/');
    }
  }, [user]);

  return user?.role === role ? children : null;
};

export default RoleBasedComponent;
