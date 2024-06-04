import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
  width: 200px; /* Adjust the size as needed */
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0070f3;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0058c6;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Logo src="/logo.png" alt="CloudMeter Logo" />
      <Title>Welcome to CloudMeter</Title>
      <Subtitle>Track Your Financial Operations Effortlessly</Subtitle>
      <Button>Get Started</Button>
    </Container>
  );
};

export default HomePage;
