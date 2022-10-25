import styled from 'styled-components';
import React from 'react';
const SideMemo = styled.div`
  border-color: #f1e5bc;
  border-width: 1px;
  border-style: solid;
  background-color: #fdf7e2;
  div.title {
    background-color: #f1e5bc;
    border-bottom: 1px solid;
  }
`;

function SideNav2() {
  return (
    <>
      <SideMemo>
        <div className="title">The Overflow Blog</div>
      </SideMemo>
      <SideMemo>
        <div className="title">The Overflow Blog</div>
      </SideMemo>
    </>
  );
}
export default SideNav2;
