import styled from 'styled-components';
import React from 'react';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  background: #202224;
  width: 100%;
  min-height: 300px;
  margin: auto;
  text-align: center;
  color: #868e96;

  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #818a91;
  margin: 0 20px;
  font-size: 13px;
  text-align: left;
`;

const StyledLinkTwo = styled.a`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  color: #acb2b7;
  margin: 0 20px;
  text-align: left;
  font-size: 13px;
  font-weight: 700;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1 0 auto;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    display: flex;
    justify-content: start;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    display: flex;
  }
`;

const StyledDivTwo = styled.div`
  display: flex;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 1 150px;
  padding: 20px;
  > div {
    display: flex;
    text-align: left;
  }
  > div,
  > div > a {
    font-size: 11px;
  }

  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    /* justify-content: space-between; */
  }
`;

const StyledDivThree = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    flex-direction: column;
  }
`;

const StyledLinkThree = styled.a`
  text-decoration: none;
  font-size: 11px;
  color: #acb2b7;
  display: flex;
  align-self: start;
  margin: 5px;
`;

const StyledDivDown = styled.div`
  align-self: end;
  font-size: 11px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledDivTwo>
        <StyledDivThree>
          <StyledDiv>
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo href="http://localhost:3000/">
              STACK OVERFLOW
            </StyledLinkTwo>
            <StyledLink href="http://localhost:3000/">Questions</StyledLink>
            <StyledLink href="https://stackoverflow.com/help">Help</StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo href="https://stackoverflow.co/">
              PRODUCTS
            </StyledLinkTwo>
            <StyledLink href="https://policies.google.com/privacy?hl=ko&fg=1">
              Teams
            </StyledLink>
            <StyledLink href="https://policies.google.com/terms?hl=ko&fg=1">
              Advertising
            </StyledLink>
            <StyledLink href="https://stackoverflow.co/collectives/">
              Collectives
            </StyledLink>
            <StyledLink href="https://stackoverflow.co/talent/">
              Talent
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo href="https://stackoverflow.co/">
              COMPANY
            </StyledLinkTwo>
            <StyledLink href="https://stackoverflow.co/">About</StyledLink>
            <StyledLink href="https://stackoverflow.co/company/press">
              Press
            </StyledLink>
            <StyledLink href="https://stackoverflow.co/company/work-here">
              Work Here
            </StyledLink>
            <StyledLink href="https://stackoverflow.com/legal/terms-of-service">
              Legal
            </StyledLink>
            <StyledLink href="https://stackoverflow.com/legal/privacy-policy">
              Privacy Policy
            </StyledLink>
            <StyledLink href="https://stackoverflow.com/legal/terms-of-service">
              Terms of Service
            </StyledLink>
            <StyledLink href="https://stackoverflow.co/company/contact">
              Contact Us
            </StyledLink>
            <StyledLink href="http://localhost:3000/">
              Cookie Settings
            </StyledLink>
            <StyledLink href="https://stackoverflow.com/legal/cookie-policy">
              Cookie Policy
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo href="https://stackexchange.com/">
              STACK EXCHANGE NETWORK
            </StyledLinkTwo>
            <StyledLink href="https://stackexchange.com/sites#technology">
              Technology
            </StyledLink>
            <StyledLink href="https://stackexchange.com/sites#culturerecreation">
              Culture & recreation
            </StyledLink>
            <StyledLink href="https://stackexchange.com/sites#lifearts">
              Life & arts
            </StyledLink>
            <StyledLink href="https://stackexchange.com/sites#science">
              Science
            </StyledLink>
            <StyledLink href="https://stackexchange.com/sites#professional">
              Professional
            </StyledLink>
            <StyledLink href="https://stackexchange.com/sites#business">
              Business
            </StyledLink>
            <StyledLink href="https://api.stackexchange.com/">API</StyledLink>
            <StyledLink href="https://data.stackexchange.com/">Data</StyledLink>
          </StyledDiv>
          <StyledDivTwo>
            <div>
              <StyledLinkThree href="https://stackoverflow.blog/?blb=1&_ga=2.31851262.1960660203.1666600034-1945471025.1666227659">
                Blog
              </StyledLinkThree>
              <StyledLinkThree href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </StyledLinkThree>
              <StyledLinkThree href="https://twitter.com/stackoverflow">
                Twitter
              </StyledLinkThree>
              <StyledLinkThree href="https://www.linkedin.com/company/stack-overflow">
                LinkedIn
              </StyledLinkThree>
              <StyledLinkThree href="https://www.instagram.com/thestackoverflow/">
                Instagram
              </StyledLinkThree>
            </div>
            <StyledDivDown>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under CC BY-SA. rev 2022.10.25.33519
            </StyledDivDown>
          </StyledDivTwo>
        </StyledDivThree>
      </StyledDivTwo>
    </Wrapper>
  );
};

export default Footer;
