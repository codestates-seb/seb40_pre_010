import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const LeftArea = styled.div`
  font-size: 13px;
  position: relative;
  width: 164px;
  color: #525960;
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  border-right: 1px solid #d6d9dc;
  padding: 24px 0 0 0;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
`;
const LGroup = styled.ul`
  flex-direction: column;
  padding: 0;
  margin: 0;
  line-height: 26px;
  margin-left: ${(props) => props.margin_left};
`;
const List = styled.li`
  list-style: none;
  text-align: left;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: 26px;
  display: ${(props) => props.Display};
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  border-bottom: ${(props) => props.border_bottom};
  border-top: ${(props) => props.border_top};
  ${({ font_md }) => {
    return font_md ? 'font-size:13px;' : null;
  }}
  ${({ selected }) => {
    return selected
      ? 'background-color:#f1f2f3; color: black; fill: black; border-right: 3px solid #f48225; font-weight:700'
      : null;
  }}
`;
const MySvg = styled.svg`
  margin-right: ${(props) => props.margin_right};
  fill: ${(props) => props.fill};
`;
const Banner = styled.div`
  border-top: 1px solid #d6d9dc;
  border-bottom: 1px solid #d6d9dc;
  padding: 12px 12px 6px 12px;
  text-align: left;
  line-height: 17px;
  img {
    margin: 8px 0px;
  }
`;
const MyButton = styled.a`
  display: block;
  border-radius: 4px;
  background-color: ${(props) => props.theme};
  padding: 0.6em;
  text-align: center;
  text-decoration: none;
  font-size: 11px;
  color: #6a737c;
  ${({ boxshadow }) => {
    return boxshadow
      ? 'box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%); color:white'
      : null;
  }}
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Earth = () => {
  return (
    <MySvg
      fill="#525960"
      margin_right="4px"
      aria-hidden="true"
      className="svg-icon iconGlobe"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
    </MySvg>
  );
};
const Star = () => {
  return (
    <MySvg
      fill="#f48225"
      margin_right="4px"
      aria-hidden="true"
      className="fc-orange-400 svg-icon iconStarVerified"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path>
    </MySvg>
  );
};
const IconText = (icon, text) => {
  return (
    <>
      {icon} {text}
    </>
  );
};
const Linked = (text, link) => {
  return (
    <MyLink className="d-flex ai-center" to={link}>
      {text}
    </MyLink>
  );
};
function SideNav1() {
  return (
    <LeftArea>
      <Wrapper>
        <LGroup>
          <List padding="4px 4px 4px 8px">{Linked('HOME', '/')}</List>
          <List margin="16px 0px 4px 8px">
            PUBLIC
            <LGroup margin_left="-8px">
              <List font_md={true} selected={true} padding="8px 6px 8px 8px">
                {Linked(IconText(Earth(), 'Question'), '/')}
              </List>
              <List font_md={true} padding="4px 4px 4px 30px">
                {Linked('Tags', '/tags')}
              </List>
              <List font_md={true} padding="4px 4px 4px 30px">
                {Linked('Users', '/')}
              </List>
              <List font_md={true} padding="4px 4px 4px 30px">
                {Linked('Compaines', '/')}
              </List>
            </LGroup>
          </List>
          <List margin="16px 4px 0px 8px" Display="flex">
            COLLECTIVES
            <MySvg
              fill="#525960"
              aria-hidden="true"
              className="svg-icon iconInfoSm"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path>
            </MySvg>
          </List>
          <LGroup>
            <List font_md={true} padding="8px 6px 8px 8px">
              {Linked(IconText(Star(), 'Explore Collective'), '/')}
            </List>
          </LGroup>
          <List margin="16px 0px 8px 8px">TEAMS</List>
          <Banner>
            <strong>Stack Overflow for Teams</strong> – Start collaborating and
            sharing organizational knowledge.
            <img
              width="139"
              height="114"
              src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
              alt=""
            />
            <MyButton boxshadow={true} theme="darkorange" href="/">
              Create a free Team
            </MyButton>
            <MyButton href="/">Why Teams?</MyButton>
          </Banner>
        </LGroup>
      </Wrapper>
    </LeftArea>
  );
}

export default SideNav1;
