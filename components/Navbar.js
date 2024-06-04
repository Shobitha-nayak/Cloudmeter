// components/Navbar.js
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background: #0070f3;
  padding: 1rem;
  color: white;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <NavItems>
        <div>
          <NavLink href="/">Home</NavLink>
          {user ? (
            <>
              <NavLink href="/dashboard">Dashboard</NavLink>
              {user.role === 'admin' && <NavLink href="/admin">Admin</NavLink>}
            </>
          ) : (
            <>
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/signup">Signup</NavLink>
              <NavLink href="/forgot-password">Forgot Password</NavLink>
            </>
          )}
        </div>
        {user && <Button onClick={logout}>Logout</Button>}
      </NavItems>
    </Nav>
  );
};

export default Navbar;
