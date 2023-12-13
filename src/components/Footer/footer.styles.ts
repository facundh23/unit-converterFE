import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 50px;
  background-color: #2e0039;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  bottom: 0;
  position: fixed;

  @media (min-width: 768px) {
    align-items: center;
  }
`;
export const StyledFooterItems = styled.p`
  color: white;
`;
