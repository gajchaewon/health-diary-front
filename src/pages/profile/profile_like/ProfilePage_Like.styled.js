import styled from "styled-components";

export const LikedDiary = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-left: 60px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PaginationContainer = styled.div`
  display: flex;
`;

export const PaginationButton = styled.button`
  width: fit-content;
  color: black;
  padding: 10px 20px;
  border: none;
  color: ${(props) => (props.disabled ? "gray" : "inherit")};
  &:disabled {
    cursor: not-allowed;
  }
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
`;
