import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: #222;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 140px 68px 80px;

  @media (max-width: 1024px) {
    padding: 120px 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 100px 24px 40px;
  }
`;

const CentreContent = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  max-width: 1284px;
  width: 100%;

  @media (max-width: 1200px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 528px;
  height: 528px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`;

const PhotoInner = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Role = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Name = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 70px;
  font-weight: 700;
  line-height: 35px;
  color: #FFF;
  margin: 20px 0;

  @media (max-width: 1200px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  color: #FFF;
  max-width: 674px;
  margin: 24px 0 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62px;
  padding: 0 40px;
  border-radius: 30px;
  border: 3px solid #D5D5D5;
  background: #333;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  color: #FFF;
  text-decoration: none;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #444;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <MainContent>
        <CentreContent>
          <PhotoWrapper>
            <PhotoInner>
              <img src="/profile.jpg" alt="Shubham Agrawal" />
            </PhotoInner>
          </PhotoWrapper>
          <ProfileInfo>
            <Role>Software Developer 2</Role>
            <Name>Shubham Agrawal</Name>
            <Description>
              I am a results-driven Software Developer with expertise in RESTful APIs, microservices, and cloud technologies. I excel at optimizing application performance, enhancing security, and resolving complex issues.
            </Description>
            <ButtonGroup>
              <Button href="/resume.pdf" target="_blank">Resume</Button>
              <Button href="#contact">Contact</Button>
            </ButtonGroup>
          </ProfileInfo>
        </CentreContent>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;