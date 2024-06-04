// pages/dashboard.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}</p>
    </div>
  );
};

export default Dashboard;

