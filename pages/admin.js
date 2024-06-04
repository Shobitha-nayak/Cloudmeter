// pages/admin.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RoleBasedComponent from '../components/RoleBasedComponent';

const Admin = () => {
  const { user } = useContext(AuthContext);

  return (
    <RoleBasedComponent role="admin">
      <div>
        <h1>Admin Page</h1>
        <p>Welcome, {user?.email}</p>
      </div>
    </RoleBasedComponent>
  );
};

export default Admin;
