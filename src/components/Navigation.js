import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 68px;
  background: #222;
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    height: 80px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #FFF;
  text-decoration: none;
  line-height: 35px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: ${props => props.$active ? '700' : '400'};
  color: ${props => props.$active ? '#FFF' : 'rgba(255, 255, 255, 0.5)'};
  text-decoration: none;
  line-height: 35px;
  transition: color 0.3s ease;

  &:hover {
    color: #FFF;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const Navigation = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <Logo to="/">Shubham Agrawal</Logo>
      <NavLinks>
        <NavLink to="/" $active={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/experience" $active={location.pathname === '/experience'}>Experience</NavLink>
        <NavLink to="/education" $active={location.pathname === '/education'}>Education</NavLink>
        <NavLink to="/skills" $active={location.pathname === '/skills'}>Skills</NavLink>
        <NavLink to="/about" $active={location.pathname === '/about'}>About</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;
