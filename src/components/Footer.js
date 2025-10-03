import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  width: 1920px;
  height: 50px;
  left: 0px;
  bottom: 0px;
  border-top: 2px solid #333333;
`;

const SocialLinks = styled.div`
  position: absolute;
  left: 68px;
  top: 15px;
  display: flex;
  gap: 40px;
`;

const SocialLink = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Copyright = styled.div`
  position: absolute;
  width: 213px;
  height: 34px;
  right: 61px;
  top: 15px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/shubhamagrawal6" target="_blank">Github</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/shubham-agrawal-a89493194" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="https://leetcode.com/shubhamagrawal6" target="_blank">LeetCode</SocialLink>
      </SocialLinks>
      <Copyright>© 2025 Shubham Agrawal</Copyright>
    </FooterContainer>
  );
};

export default Footer;