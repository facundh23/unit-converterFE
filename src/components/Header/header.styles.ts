import { FaArrowRightArrowLeft } from "react-icons/fa6";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  height: 30px;
  background-color: white;
  width: 100%;
  border-bottom: 2px solid gray;
  padding: 5px;
`;
export const StyledTitle = styled.h2`
  color: #2e0039;
  font-size: 20px;
`;

export const StyledIcon = styled(FaArrowRightArrowLeft)`
  color: #2e0039;
  font-size: 20px;
`;
