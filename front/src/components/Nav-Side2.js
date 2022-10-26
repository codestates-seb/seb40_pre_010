import styled from 'styled-components';
import React from 'react';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;
const Wrapper = styled.div`
  width: 300px;
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 100%;
    padding: 0 0.5em;
  }
`;
const Sidebar = styled.div`
  margin-bottom: 16px;
  div.title {
    text-align: left;
  }
  div.mb {
    margin-bottom: 1em;
  }
  div.question {
    > div {
      text-align: left;
      font-size: 11px;
      color: #0074cc;
      margin-bottom: 10px;
    }
  }
  div.flex {
    display: flex;
    font-size: 12px;
    > div {
      margin-bottom: 0.5em;
      padding: 0.4em 0.5em;
    }
    > div.tag {
      background: #e1ecf4;
      color: #39739d;
      border-radius: 4px;
    }
    > div.tagamount {
      font-size: 11px;
      color: #6a737c;
    }
  }
`;
const SideMemo = styled.div`
  font-size: 12px;
  border-color: #f1e5bc;
  border-width: 1px;
  border-style: solid;
  background-color: #fdf7e2;
  &:first-child {
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
  }
  &:last-child {
    border-radius: 0 0 4px 4px;
  }
  div.title {
    background-color: #fbf3d5;
    border-bottom: 1px solid #f1e5bc;
    padding: 12px 15px;
    font-weight: 700;
    color: #525960;
    text-align: left;
  }
  div.body {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      margin: 12px 0;
      padding: 0 16px;
      > div {
        &:first-child {
          flex-basis: 8.33%;
          flex-shrink: 0;
        }
        &:last-child {
          text-align: left;
        }
      }
    }
  }
`;
const SideCollectives = styled.div`
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #e3e6e8;
  div {
    text-align: left;
  }
  div.title {
    padding: 12px 15px;
    font-weight: 400;
    color: #525960;
    background: #f8f9f9;
  }
  div.flex {
    display: flex;
    justify-content: space-between;
  }
  div.body > div {
    padding: 16px 15px;
    border-bottom: 1px solid #e3e6e8;
    &:last-child {
      border-bottom: 0;
    }
  }
  div.logo {
    margin-right: 12px;
  }
  div.name {
    font-size: 15px;
  }
  div.amount {
    font-size: 12px;
    margin-bottom: 8px;
  }
  div.text {
    font-size: 13px;
  }
`;
const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 1px solid #379fef;
  color: #379fef;
  padding: 0.8em;
  &:hover {
    background-color: #f0f8ff;
  }
`;
const Pencil = () => {
  return (
    <svg
      aria-hidden="true"
      className="va-text-top svg-icon iconPencilSm"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
    </svg>
  );
};
const Comment = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon"
      width="14"
      height="14"
      viewBox="0 0 25 20"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        id="comment-Regular-2"
        data-name="comment-Regular"
        className="cls-1"
        d="M17,3.25H7A4.756,4.756,0,0,0,2.25,8V21a.75.75,0,0,0,1.28.53l2.414-2.414a1.246,1.246,0,0,1,.885-.366H17A4.756,4.756,0,0,0,21.75,14V8A4.756,4.756,0,0,0,17,3.25ZM20.25,14A3.254,3.254,0,0,1,17,17.25H6.829a2.73,2.73,0,0,0-1.945.806L3.75,19.189V8A3.254,3.254,0,0,1,7,4.75H17A3.254,3.254,0,0,1,20.25,8Z"
      />
    </svg>
  );
};
const StackOverFlow = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon"
      width="14"
      height="14"
      viewBox="0 0 25 25"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"
      />
    </svg>
  );
};
const MemoBody = (icon, text) => {
  return (
    <div>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
const MemoCollectives = (img, name, num, text) => {
  return (
    <div>
      <div className="flex">
        <div className="flex">
          <div className="logo">
            <img width="32" height="32" src={img} alt={name} />
          </div>
          <div>
            <div className="name">{name}</div>
            <div className="amount">{num}k Members</div>
          </div>
        </div>
        <div>
          <Button>Join</Button>
        </div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};
const Tags = (name, amount, i) => {
  return (
    <div className="flex" key={i}>
      <div className="tag">{name}</div>
      <div className="tagamount">x {amount}</div>
    </div>
  );
};
const TagsMap = [
  ['javascript', '2439716'],
  ['python', '2047600'],
  ['java', '1873265'],
  ['C#', '1564987'],
];

const QuestionMap = [
  `What are "equity" and "equitable remedies"`,
  `What's a good way to display settings that can be configured from both "directions"`,
  `Female singing a song written for a male vocalist`,
  `Was there really a navy officer named Picard at the Battle of Trafalgar?`,
  `Refund possibilities from Deutsche Bahn in the case of missed connecting train`,
  `Scale according Rotation in Geometry Nodes`,
  `What do you call those "round checkboxes"?`,
  `Modifying road bike for safer use on poor roads`,
  `What filter do you use for concert, low light photography?`,
  `I want to cite a theorem from a book written by influential scientists. However the theorem is not proven in the book. Should I add a proof of my own?`,
];
function SideNav2() {
  return (
    <Wrapper>
      <Sidebar>
        <SideMemo>
          <div className="title">The Overflow Blog</div>
          <div className="body">
            {MemoBody(
              Pencil(),
              'How hardware and software can maximize your flow states'
            )}
            {MemoBody(
              Pencil(),
              'A flight simulator for developers to practice real world challenges and...'
            )}
          </div>
        </SideMemo>
        <SideMemo>
          <div className="title">Featured on Meta</div>
          <div className="body">
            {MemoBody(Comment(), 'The 2022 Community-a-thon has begun!')}
            {MemoBody(
              Comment(),
              'Mobile app infrastructure being decommissioned'
            )}
            {MemoBody(
              StackOverFlow(),
              'Staging Ground Workflow: Canned Comments'
            )}
            {MemoBody(StackOverFlow(), 'The [script] tag is being burninated')}
            {MemoBody(StackOverFlow(), 'Ask Wizard Test Graduation')}
          </div>
        </SideMemo>
      </Sidebar>
      <Sidebar>
        <SideCollectives>
          <div className="title">Collectives</div>
          <div className="body">
            {MemoCollectives(
              'https://cdn.sstatic.net/Sites/stackoverflow/Img/subcommunities/google-cloud.svg?v=fbae32ddf178',
              'Google Cloud',
              '30',
              'Google Cloud provides organizations with leading infrastructure, platform capabilities and industry solutions to help them solve their most critical business problems.'
            )}
            {MemoCollectives(
              'https://cdn.sstatic.net/Sites/stackoverflow/Img/subcommunities/twilio.svg?v=ab07490da974',
              'Twilio',
              '5',
              'Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the world’s communications infrastructure through APIs that are simple enough for any developer, yet robust enough'
            )}
            {MemoCollectives(
              'https://cdn.sstatic.net/Sites/stackoverflow/Img/subcommunities/wso2.svg?v=216ee1816680',
              'WSO2',
              '2',
              'WSO2 solutions give enterprises the flexibility to deploy applications and services on-premises, on private or public clouds, or in hybrid environments. Our collective aims to enable developers to build value-added'
            )}
          </div>
        </SideCollectives>
      </Sidebar>
      <Sidebar>
        <div className="title mb">Related Tags</div>
        <div className="body">
          {TagsMap.map((x, i) => {
            return Tags(x[0], x[1], i);
          })}
        </div>
      </Sidebar>
      <Sidebar>
        <div className="title mb">Hot Network Questions</div>
        <div className="body question">
          {QuestionMap.map((x, i) => {
            return <div key={i}>{x}</div>;
          })}
        </div>
      </Sidebar>
    </Wrapper>
  );
}
export default SideNav2;
