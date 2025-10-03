import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #222222;
  color: #FFFFFF;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 5rem 4rem 0;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 0;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 75rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5rem solid #333333;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 18.75rem;
    height: 18.75rem;
  }

  @media (max-width: 768px) {
    width: 15.625rem;
    height: 15.625rem;
  }

  @media (max-width: 480px) {
    width: 12.5rem;
    height: 12.5rem;
  }
`;

const ProfileInfo = styled.div`
  max-width: 37.5rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Role = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.25rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const Name = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.875rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 34.375rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.875rem;
  border: 0.125rem solid #FFFFFF;
  border-radius: 1.875rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FFFFFF;
    color: #222222;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.625rem 1.5625rem;
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 1.875rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
    bottom: 3.75rem;
  }
`;

const SocialLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 3.75rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    position: relative;
    text-align: center;
    right: 0;
    margin-top: 2.5rem;
    font-size: 0.75rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navigation />
      <MainContent>
        <ProfileSection>
          <ProfileImage>
            <img src="/profile.jpg" alt="Shubham Agrawal" />
          </ProfileImage>
          <ProfileInfo>
            <Role>Software Developer 2</Role>
            <Name>Shubham Agrawal</Name>
            <Description>
              I am a results-driven Software Developer with expertise in RESTful
              APIs, microservices, and cloud technologies. I excel at optimizing
              application performance, enhancing security, and resolving
              complex issues.
            </Description>
            <ButtonGroup>
              <Button href="/resume.pdf" target="_blank">Resume</Button>
              <Button href="/contact">Contact</Button>
            </ButtonGroup>
          </ProfileInfo>
        </ProfileSection>
      </MainContent>

      <SocialLinks>
        <SocialLink href="https://github.com/shubhamagrawal6" target="_blank">Github</SocialLink>
        <SocialLink href="https://linkedin.com/in/shubhamagrawal6" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="https://leetcode.com/shubhamagrawal6" target="_blank">LeetCode</SocialLink>
      </SocialLinks>
      <Copyright>© 2025 All Rights Reserved.</Copyright>
    </HomeContainer>
  );
};

export default Home;