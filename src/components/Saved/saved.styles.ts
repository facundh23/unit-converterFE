import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  boder-radius: 5px;
  height: 60%;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  background-color: gray;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const StyledDeletedBtn = styled.button`
  background-color: gray;
  padding: 5px;
  border: none;
  cursor: pointer;
`;
