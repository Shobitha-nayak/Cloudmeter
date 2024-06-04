// components/Layout.js
import Navbar from './Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
