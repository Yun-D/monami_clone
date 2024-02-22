import React from "react";
import { styled } from "styled-components";

const Topbar = () => {
  return (
    <RowDiv>
      <div>
        <img src="/images/logo.jpg" alt="logo" />
      </div>
      <GridDiv>
        <Topbar_text>hello</Topbar_text>
        <Topbar_text>hello</Topbar_text>
        <Topbar_text>hello</Topbar_text>
        <Topbar_text>hello</Topbar_text>
        <Topbar_text>hello</Topbar_text>
        <Topbar_text>hello</Topbar_text>
      </GridDiv>
    </RowDiv>
  );
};

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const GridDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 150px);
`;

const Topbar_text = styled.h2`
  font-weight: normal;
  color: #555;
  font-size: 17px;
`;

export default Topbar;
