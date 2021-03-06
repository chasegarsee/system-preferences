import styled from "styled-components";

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: auto;
  margin: 2% 0;
`;

export const MainCardSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 100vh;
  margin: 2% 0;
`;

export const StyledDivHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledH1 = styled.h2`
  width: 100%;
  font-weight: 300;
  padding: 6px;
`;

export const StyledH3 = styled.h3`
  width: 100%;
  font-weight: 300;
  padding: 6px;
`;

export const StyledButtonDiv = styled.div``;

export const StyledInput = styled.input`
  border: none;
  width: 3%;
  background-color: rgb(0, 123, 255);
  color: white;
  text-align: center;
  margin-right: 1%;
  border-radius: 15px;
`;

export const StyledDivWithUnderline = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 3px solid #eeeff2;
`;

export const StyledButtonDivWithUnderline = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eeeff2;
`;

export const StyledSpan = styled.span`
  padding: 0 12px 6px 6px;
  width: 30%;
  font-size: 1.2rem;
`;

export const StyledPara = styled.p`
  line-height: 18px;
  font-size: 13px;
  text-align: left;
  color: #747487;
`;

export const StyledSpan2 = styled.span`
  width: 30%;
  font-weight: 300;
  padding: 10px 5px;
  font-size: 12px;
  font-weight: 600;
  color: #8a8a9e;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
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

export const StyledFormInput = styled.input`
  display: block;
  width: 35%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
