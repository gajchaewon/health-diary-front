import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  //border: 1.5px solid darkgrey;
  border-radius: 1rem;
  border: none;
  background-color: white;
  color: #212121;
  cursor: pointer;
  margin: 0 5px;
  padding: 6px 12px;
  outline: none;
  font-size: 14px;

  &:disabled {
    border: 1px solid #ccc;
    color: #ccc;
    cursor: not-allowed;
  }

  &.active {
    background-color: lightgray;
    color: white;
  }

  &:hover:not(:disabled) {
    background-color: rgba(25, 118, 210, 0.04);
  }
`;

export const ArrowButton = styled.button`
  border: none;
  background-color: transparent;
  color: #212121;
  cursor: pointer;
  margin: 0 5px;
  padding: 6px 12px;
  outline: none;
  font-size: 5px;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    //background-color: aliceblue;
  }
`;
