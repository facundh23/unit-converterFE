import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2e0039;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  width: 95%;
  height: 35%;
  margin: 0 auto;
  border-radius: 10%;
  margin-top: 20px;

  @media (min-width: 471px) {
    border-radius: 10px;
  }
`;

export const StyledContainerInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 60%;
  padding: 5px;
`;

export const SelectUnit = styled.select`
  width: 100%;
  background-color: #2e0039;
  border: none;
  border-bottom: 1px solid white;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
export const ParagraphUnit = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const StyledInputValue = styled.input`
  width: 100%;
  padding: 5px;
  background-color: #2e0039;
  border: none;
  border-bottom: 1px solid white;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const StyledBtn = styled.button`
  background-color: #2e0039;
  border: none;
  color: white;
  margin-top: 10px;
`;
