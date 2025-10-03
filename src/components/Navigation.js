import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background: rgba(34, 34, 34, 0.95);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 4rem;
  }
`;

const Logo = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #FFFFFF;
  }

  &.active {
    color: #FFFFFF;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background: rgba(34, 34, 34, 0.98);
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const MobileNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
`;

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Logo to="/">Shubham Agrawal</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
        <MobileNavLink to="/experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</MobileNavLink>
        <MobileNavLink to="/education" onClick={() => setIsMobileMenuOpen(false)}>Education</MobileNavLink>
        <MobileNavLink to="/skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</MobileNavLink>
        <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navigation;