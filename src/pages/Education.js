import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
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
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
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

const EducationCard = styled.div``;

const InstitutionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const InstitutionInfo = styled.div`
  flex: 1;
`;

const InstitutionName = styled.h3`
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

const Degree = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 35px;
  color: #FFF;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CourseList = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const CertificationCard = styled.div`
  margin-bottom: 44px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
`;

const CertificationTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 35px;
  color: #FFF;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificationList = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
`;

const CertificateLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #6BE1FF;
  text-decoration: underline;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: #8EEAFF;
  }
`;

const Education = () => {
  return (
    <EducationContainer>
      <Header>
        <PageTitle>Education and Certifications</PageTitle>
      </Header>
      <Content>
        <LeftCol>
          <EducationCard>
            <InstitutionHeader>
              <Logo src="https://api.builder.io/api/v1/image/assets/TEMP/35f79d455d330ebd6c745cb58cf9435326cedb46?width=201" alt="VJTI" />
              <InstitutionInfo>
                <InstitutionName>Veermata Jijabai Technological Institute</InstitutionName>
                <Location>Mumbai, IN</Location>
              </InstitutionInfo>
            </InstitutionHeader>
            
            <Degree>B.Tech in Electronics and Telecommunication                   Aug 18 - Jun 22</Degree>
            
            <CourseList>
              Relevant Coursework: 
              Computer Programming (C++)
              Python Programming
              Data Structures
              Algorithms
              Object Oriented Programming
              Database Management Systems
              Computer Networks
              Operating Systems
              Applied Machine Learning and Fuzzy Systems
              Pattern Recognition and Machine Vision
              Digital Image Processing.
            </CourseList>
          </EducationCard>
        </LeftCol>

        <RightCol>
          <CertificationCard>
            <CertificationHeader>
              <Logo src="https://api.builder.io/api/v1/image/assets/TEMP/8f7a98dc6e36dfef377281329c929011c7ba1b6c?width=192" alt="Oracle" />
              <CertificationTitle>Oracle Cloud Infrastructure Foundations Associate</CertificationTitle>
            </CertificationHeader>
            
            <CertificationList>
              OCI Fundamentals
              Identity And Access Management in OCI
              Networking in OCI
              Compute Instances in OCI
              Storage Management in OCI
              Observability and Monitoring in OCI
              Security Management in OCI
              Governance and Administration in OCI

            </CertificationList>
            <CertificateLink href="https://catalog-education.oracle.com" target="_blank">Certificate on Oracle University</CertificateLink>
          </CertificationCard>

          <CertificationCard>
            <CertificationHeader>
              <Logo src="https://api.builder.io/api/v1/image/assets/TEMP/8f7a98dc6e36dfef377281329c929011c7ba1b6c?width=192" alt="Oracle" />
              <CertificationTitle>Oracle Cloud Infrastructure AI Foundations Associate</CertificationTitle>
            </CertificationHeader>
            
            <CertificationList>
              AI Foundations
              Machine Learning Foundations
              Deep Learning Foundations
              Generative AI and LLM Foundations
              OCI AI Portfolio
              OCI Generative AI Service
              OCI AI Service

            </CertificationList>
            <CertificateLink href="https://catalog-education.oracle.com" target="_blank">Certificate on Oracle University</CertificateLink>
          </CertificationCard>
        </RightCol>
      </Content>
    </EducationContainer>
  );
};

export default Education;
