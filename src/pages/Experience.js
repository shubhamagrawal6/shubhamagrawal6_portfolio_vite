import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  min-height: 100vh;
  background: #222;
  display: flex;
  flex-direction: column;
  padding-top: 93px;
`;

const Header = styled.div`
  width: 100%;
  height: 125px;
  background: #252525;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 0 68px;

  @media (max-width: 768px) {
    padding: 0 24px;
    height: 100px;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 35px;
  color: #FFF;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 53px 110px 80px;
  display: flex;
  gap: 150px;

  @media (max-width: 1400px) {
    gap: 80px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 40px 60px;
    gap: 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 24px 60px;
  }
`;

const LeftCol = styled.div`
  flex: 1;
`;

const RightCol = styled.div`
  flex: 1;
`;

const ExperienceCard = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 35px;
  color: #FFF;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Location = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 35px;
  color: #FFF;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RoleSection = styled.div`
  margin-bottom: 24px;
`;

const Position = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 35px;
  color: #FFF;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
`;

const CertificateLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #6BE1FF;
  text-decoration: underline;
  display: inline-block;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    color: #8EEAFF;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <Header>
        <PageTitle>Experience</PageTitle>
      </Header>
      <Content>
        <LeftCol>
          <ExperienceCard>
            <CompanyHeader>
              <CompanyLogo src="https://api.builder.io/api/v1/image/assets/TEMP/034c6b38218f82a1b8e6a56edbe926ca56d268d7?width=201" alt="Oracle" />
              <CompanyInfo>
                <CompanyName>Oracle Financial Services Software</CompanyName>
                <Location>Bengaluru, IN</Location>
              </CompanyInfo>
            </CompanyHeader>
            
            <RoleSection>
              <Position>Software Developer 2                                                          Sep 24 - Present</Position>
              <Description>
                Enhanced microservices handling core resources by integrating with external systems, enabling extensibility of resource data and ensuring UI-captured modifications are synchronized and persisted across systems.
                Designed and implemented SCIM-compliant APIs in the User and Role Management service, enabling seamless migration and provisioning of SSO-managed users into the application.
                Redesigned the audit logging framework for microservices by capturing both UTC timestamps and branch context time zones, providing dual UI views for global and localized audit tracking to improve transparency and usability.
                Collaborated with cross-functional teams, including development and consulting teams, to deliver rapid solutions for high-severity production issues, minimizing downtime.
              </Description>
            </RoleSection>

            <RoleSection>
              <Position>Associate Application Developer                                         Jul 22 - Sep 24</Position>
              <Description>
                Redesigned the Role-Based Access Control (RBAC) system by moving authorization checks from individual microservices to the API Gateway, leveraging URL and HTTP method mapping for faster interservice requests. Developed a migration strategy to seamlessly transition legacy role records, ensuring zero downtime and no customer impact.
                Engineered a high-performance RBAC logging system using Kafka Streams, capturing user access metadata (URL, method, role, IP, branch context, session, status) with minimal request overhead. Designed a buffered, single-threaded publisher in the API Gateway for efficiency, along with a fallback mechanism to guarantee log persistence even during Kafka outages.
                Improved performance of Core APIs by fault tolerant caching of resources, reducing redundant interservice calls and latency. Enhanced query efficiency with efficient JPA mappings and database indexing, delivering faster response times and reduced load.
                Resolved and implemented over 250 bug fixes and feature enhancements, improving stability, security, and performance across multiple application versions.
              </Description>
            </RoleSection>
          </ExperienceCard>
        </LeftCol>

        <RightCol>
          <ExperienceCard>
            <CompanyHeader>
              <CompanyLogo src="https://api.builder.io/api/v1/image/assets/TEMP/9c3a6b0d6438177e34687ca9804d644aa57f92f5?width=192" alt="HealthNow" />
              <CompanyInfo>
                <CompanyName>HealthNow Technologies</CompanyName>
                <Location>Mumbai, IN</Location>
              </CompanyInfo>
            </CompanyHeader>
            
            <RoleSection>
              <Position>Software Engineer Intern                                                         May 21 - Jul 21</Position>
              <Description>
                Used flutter framework for developing an e-commerce application for both Android and iOS platforms.
                Designed pixel-perfect User Interface and worked with a team using Model-View-ViewModel design pattern for the application.
                Implemented Login screen and OTP authentication using JSON Web Token.
                
              </Description>
              <CertificateLink href="https://drive.google.com" target="_blank">Certificate On Google Drive</CertificateLink>
            </RoleSection>
          </ExperienceCard>

          <ExperienceCard>
            <CompanyHeader>
              <CompanyLogo src="https://api.builder.io/api/v1/image/assets/TEMP/5766d6b67ee0d9f153d7019652d9eb86e4c1080f?width=138" alt="Story Of Makers" />
              <CompanyInfo>
                <CompanyName>Story Of Makers</CompanyName>
                <Location>Mumbai, IN</Location>
              </CompanyInfo>
            </CompanyHeader>
            
            <RoleSection>
              <Position>Coding Instructor                                                                         Oct 20 - Dec 20</Position>
              <Description>
                Contributed to planning appropriate and engaging lessons learning applications. 
                Taught diverse student population by employing various learning styles and abilities. 
                Graded quizzes, tests, homework and projects to provide students with timely academic progress information and feedback.

              </Description>
              <CertificateLink href="https://drive.google.com" target="_blank">Certificate On Google Drive</CertificateLink>
            </RoleSection>
          </ExperienceCard>
        </RightCol>
      </Content>
    </ExperienceContainer>
  );
};

export default Experience;
