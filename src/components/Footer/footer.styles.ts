import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 50px;
  background-color: #2e0039;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  position: fixed;
  gap: 15px;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const StyledFooterItems = styled.p`
  color: white;
`;
