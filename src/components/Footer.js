import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 68px;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 0 24px;
    flex-direction: column;
    height: auto;
    gap: 16px;
    padding: 16px 24px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const SocialLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Copyright = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/shubhamagrawal6" target="_blank">Github</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/shubham-agrawal-a89493194" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="https://leetcode.com/shubhamagrawal6" target="_blank">LeetCode</SocialLink>
      </SocialLinks>
      <Copyright>© 2025 All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
