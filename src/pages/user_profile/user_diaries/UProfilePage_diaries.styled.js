import styled from "styled-components";

export const DiariesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DiariesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3열로 설정니다.
  box-sizing: border-box;
`;
