import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    /* border-bottom: 1px solid #80808033; */
  }
`;

export const StyledSpan = styled.span`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

export const InnerMenuDiv = styled.div`
  display: flex;
  width: 175px;
  justify-content: flex-start;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  border: none;
  padding: 0;
  border-radius: 0.25rem;

  .active {
    background-color: rgb(22, 95, 199);
    border-radius: 0.25rem;
  }
`;

export const StyledI = styled.i`
  padding: 15px;
`;
