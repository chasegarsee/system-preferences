import styled from "styled-components";

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 45rem;
  border-radius: 6px;
  margin: 2% auto auto 0;
  border: solid 1px #d7d7d7;
  box-shadow: 1px 1px 5px 1px #80808022;
  height: auto;
`;

export const StyledDivHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledH1 = styled.h2`
  font-weight: 300;
  padding: 10px;
`;

export const StyledButtonDiv = styled.div`
  width: 100%;
`;

export const StyledButtonDivWithUnderline = styled.div`
  width: 100%;
  background: linear-gradient(to left, transparent, grey, transparent);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const StyledSpan = styled.span`
  padding: 0 12px 6px 6px;
  width: 50%;
  font-size: 1.2rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
  margin: 5px 20px;
  padding: 5px 15px;
`;

export const StyledSpanMultiLineText = styled.span`
  padding: 0 0 6px 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30%;
  font-size: 1.2rem;
`;

export const StyledSpanMultiLineTextTwo = styled.span`
  padding: 0 0 6px 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  font-size: 1.2rem;
`;
