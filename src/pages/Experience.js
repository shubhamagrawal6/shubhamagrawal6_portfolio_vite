import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const ExperienceContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #222222;
  color: #FFFFFF;
  padding: 7.5rem 3.75rem 5rem;

  @media (max-width: 768px) {
    padding: 6.25rem 1.25rem 3.75rem;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Poppins';
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 3.75rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.875rem;
  }
`;

const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

const ExperienceCard = styled.div`
  margin-bottom: 3.75rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.625rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-0.25rem);
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding: 1.5rem;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 480px) {
    gap: 0.9375rem;
  }
`;

const CompanyLogo = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  border-radius: 0.375rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.375rem;

  @media (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const CompanyName = styled.h3`
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-weight: 500;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

const Location = styled.span`
  font-family: 'Poppins';
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const RoleInfo = styled.div`
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    margin-bottom: 0.9375rem;
  }
`;

const Position = styled.h4`
  font-family: 'Poppins';
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Duration = styled.span`
  font-family: 'Poppins';
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Details = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
  
  li {
    font-family: 'Poppins';
    font-size: 0.875rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 0.8125rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 480px) {
    padding-left: 0.9375rem;
  }
`;

const CertificateLink = styled.a`
  font-family: 'Poppins';
  font-size: 0.875rem;
  color: #4A9DEC;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.625rem;
  padding: 0.375rem 0;
  transition: all 0.2s ease;
  
  &:hover {
    color: #7AB7F0;
    transform: translateX(0.25rem);
  }

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <Navigation />
      <Content>
        <PageTitle>Experience</PageTitle>
        
        <ExperienceCard>
          <CompanyHeader>
            <CompanyInfo>
              <CompanyLogo src="/logos/oracle-logo.png" alt="Oracle" />
              <CompanyName>Oracle Financial Services Software</CompanyName>
            </CompanyInfo>
            <Location>Bengaluru, IN</Location>
          </CompanyHeader>
          <RoleInfo>
            <Position>Software Developer 2</Position>
            <Duration>Sep 24 - Present</Duration>
          </RoleInfo>
          <Details>
            <li>Enhanced database modification procedures by integrating with external systems, enabling bi-directional sync. Designed API interface for ensuring UI-confined modifications are synchronized and persisted across systems.</li>
            <li>Designed and implemented SCIM-compliant APIs in the User and Role Management service, enabling seamless integration and provisioning of user-role logical constructs to applications.</li>
            <li>Redesigned the audit logging framework for microservices by capturing both UTC timestamps and branch context in its entries, providing data to drive PL/SQL and database audit tracking to improve transparency and usability.</li>
            <li>Collaborated with cross-functional teams, including development and consulting teams, to deliver rapid solutions for high-severity issues while minimizing downtime.</li>
          </Details>
          <CertificateLink href="https://drive.google.com/file/xxx" target="_blank">
            Certificate On Google Drive →
          </CertificateLink>
        </ExperienceCard>

        <ExperienceCard>
          <CompanyHeader>
            <CompanyInfo>
              <CompanyLogo src="/logos/healthnow-logo.png" alt="HealthNow" />
              <CompanyName>HealthNow Technologies</CompanyName>
            </CompanyInfo>
            <Location>Mumbai, IN</Location>
          </CompanyHeader>
          <RoleInfo>
            <Position>Software Engineer Intern</Position>
            <Duration>May 21 - Jul 21</Duration>
          </RoleInfo>
          <Details>
            <li>Participated in developing and delivering an application for consumers and care providers to book medical appointments.</li>
            <li>Helped improve user interface rendering patterns working with a team using Model-View-ViewModel design pattern for the application.</li>
            <li>Implemented Login screen and OTP authentication using JSON Web Token.</li>
          </Details>
        </ExperienceCard>

        <ExperienceCard>
          <CompanyHeader>
            <CompanyInfo>
              <CompanyLogo src="/logos/story-of-makers-logo.png" alt="Story Of Makers" />
              <CompanyName>Story Of Makers</CompanyName>
            </CompanyInfo>
            <Location>Mumbai, IN</Location>
          </CompanyHeader>
          <RoleInfo>
            <Position>Coding Instructor</Position>
            <Duration>Oct 20 - Dec 20</Duration>
          </RoleInfo>
          <Details>
            <li>Contributed to planning appropriate and engaging lessons learning applications.</li>
            <li>Taught diverse student population by employing various learning styles and abilities.</li>
            <li>Graded quizzes, tests, homework and projects to provide students with timely academic progress information and feedback.</li>
          </Details>
          <CertificateLink href="https://drive.google.com/file/xxx" target="_blank">
            Certificate On Google Drive →
          </CertificateLink>
        </ExperienceCard>
      </Content>
    </ExperienceContainer>
  );
};

export default Experience;