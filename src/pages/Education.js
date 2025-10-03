import React from 'react';
import styled from "styled-components";
import Navigation from "../components/Navigation";

const EducationContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #000000;
  padding: 7.5rem 3.75rem 5rem;
  color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 6.25rem 1.25rem 3.75rem;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Poppins';
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 60px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const Card = styled.div`
  margin-bottom: 3.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  background: #1C1C1C;
  border: 0.0625rem solid #333;
  border-radius: 0.625rem;
  padding: 1.875rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.875rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1.875rem;
  }
`;

const Institution = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 30px;
  }
`;

const InstitutionLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const InstitutionInfo = styled.div`
  flex: 1;
`;

const InstitutionName = styled.h3`
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Degree = styled.h4`
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Period = styled.div`
  font-family: 'Poppins';
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Location = styled.span`
  font-family: 'Poppins';
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CourseList = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  
  li {
    font-family: 'Poppins';
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    line-height: 1.6;
    transition: all 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 1);
      transform: translateX(0.25rem);
    }

    @media (max-width: 768px) {
      font-size: 0.8125rem;
      margin-bottom: 0.375rem;
    }
  }
`;

const CertificationSection = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const CertificationLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CertificateLink = styled.a`
  font-family: 'Poppins';
  font-size: 14px;
  color: #4A9DEC;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Education = () => {
  return (
    <EducationContainer>
      <Navigation />
      <Content>
        <PageTitle>Education and Certifications</PageTitle>
        
        <Card>
          {/* Education Section */}
          <div>
            <Institution>
              <InstitutionLogo src="/logos/vjti-logo.png" alt="VJTI" />
              <InstitutionInfo>
                <InstitutionName>Veermata Jijabai Technological Institute</InstitutionName>
                <Degree>B. Tech in Electronics and Telecommunication</Degree>
                <Period>Aug 18 - Jun 22</Period>
              </InstitutionInfo>
              <Location>Mumbai, IN</Location>
            </Institution>
            <CourseList>
              <li>Computer Programming (C++)</li>
              <li>Digital Signal Processing</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Object Oriented Programming</li>
              <li>Database Management Systems</li>
              <li>Computer Networks</li>
              <li>Operating Systems</li>
              <li>Applied Machine Learning and Fuzzy Systems</li>
              <li>Pattern Recognition and Machine Vision</li>
              <li>Digital Image Processing</li>
            </CourseList>
          </div>

          {/* Certifications Section */}
          <div>
            <CertificationSection>
              <CertificationHeader>
                <CertificationLogo src="/logos/oracle-logo.png" alt="Oracle" />
                <CertificationInfo>
                  <CertificationTitle>
                    Oracle Cloud Infrastructure Foundations Associate
                  </CertificationTitle>
                </CertificationInfo>
              </CertificationHeader>
              <CourseList>
                <li>OCI Fundamentals</li>
                <li>Identity And Access Management in OCI</li>
                <li>Networking in OCI</li>
                <li>Compute Instances in OCI</li>
                <li>Container Management in OCI</li>
                <li>Observability and Monitoring in OCI</li>
                <li>Security Management in OCI</li>
                <li>Governance and Administration in OCI</li>
              </CourseList>
              <CertificateLink href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=xxx" target="_blank">
                Certificate on Oracle University →
              </CertificateLink>
            </CertificationSection>

            <CertificationSection>
              <CertificationHeader>
                <CertificationLogo src="/logos/oracle-logo.png" alt="Oracle" />
                <CertificationInfo>
                  <CertificationTitle>
                    Oracle Cloud Infrastructure AI Foundations Associate
                  </CertificationTitle>
                </CertificationInfo>
              </CertificationHeader>
              <CourseList>
                <li>OCI Fundamentals</li>
                <li>Identity And Access Management in OCI</li>
                <li>Networking in OCI</li>
                <li>Compute Instances in OCI</li>
                <li>Container Management in OCI</li>
                <li>Observability and Monitoring in OCI</li>
                <li>Security Management in OCI</li>
                <li>Governance and Administration in OCI</li>
              </CourseList>
              <CertificateLink href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=xxx" target="_blank">
                Certificate on Oracle University →
              </CertificateLink>
            </CertificationSection>
          </div>
        </Card>
      </Content>
    </EducationContainer>
  );
};

export default Education;