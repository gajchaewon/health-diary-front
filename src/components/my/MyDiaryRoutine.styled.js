import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MyDiaryContainer = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyDaRContainer = styled.div`
  display: flex;
  //align-self: flex-start;
  color: #212121;
  font-size: 36px;
  font-weight: 700;
`;

export const MyDiary = styled(NavLink)`
  margin: 0 40px 0 0;
  width: fit-content;
  color: grey;
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: #212121;
  }
`;
