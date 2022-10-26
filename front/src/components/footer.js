import styled from 'styled-components';
import React from 'react';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  background: #202224;
  width: 100%;
  height: 300px;
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
  font-size: 11px;
  text-align: left;
`;

const StyledLinkTwo = styled.a`
  display: flex;
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
`;

const StyledImg = styled.img`
  display: flex;
  justify-items: top;
`;

const StyledLinkThree = styled.a`
  display: flex;
  align-self: start;
  margin: 5px;
`;

const StyledDivDown = styled.div`
  align-self: end;
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
            <StyledLinkTwo>STACK OVERFLOW</StyledLinkTwo>
            <StyledLink
              className="footer_sub"
              href="https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            >
              Questions
            </StyledLink>
            <StyledLink
              className="footer_sub"
              href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            >
              Help
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo>PRODUCTS</StyledLinkTwo>
            <StyledLink
              className="footer_sub"
              href="https://policies.google.com/privacy?hl=ko&fg=1"
            >
              Teams
            </StyledLink>
            <StyledLink
              className="footer_sub"
              href="https://policies.google.com/terms?hl=ko&fg=1"
            >
              Advertising
            </StyledLink>
            <StyledLink>Collectives</StyledLink>
            <StyledLink>Talent</StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo>COMPANY</StyledLinkTwo>
            <StyledLink>About</StyledLink>
            <StyledLink>Press</StyledLink>
            <StyledLink>Work Here</StyledLink>
            <StyledLink>Legal</StyledLink>
            <StyledLink>Privacy Policy</StyledLink>
            <StyledLink>Terms of Service</StyledLink>
            <StyledLink>Contact Us</StyledLink>
            <StyledLink>Cookie Settings</StyledLink>
            <StyledLink>Cookie Policy</StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLinkTwo>STACK EXCHANGE NETWORK</StyledLinkTwo>
            <StyledLink>Technology</StyledLink>
            <StyledLink>Culture & recreation</StyledLink>
            <StyledLink>Life & arts</StyledLink>
            <StyledLink>Science</StyledLink>
            <StyledLink>Professional</StyledLink>
            <StyledLink>Business</StyledLink>
            <StyledLink>API</StyledLink>
            <StyledLink>Data</StyledLink>
          </StyledDiv>
          <StyledDivTwo>
            <div>
              <StyledLinkThree>Blog</StyledLinkThree>
              <StyledLinkThree>Facebook</StyledLinkThree>
              <StyledLinkThree>Twitter</StyledLinkThree>
              <StyledLinkThree>Linkedln</StyledLinkThree>
              <StyledLinkThree>Instagram</StyledLinkThree>
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
