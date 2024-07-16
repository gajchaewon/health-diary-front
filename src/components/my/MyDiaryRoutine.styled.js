import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MyDiaryContainer = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0px;
  position: sticky;
`;

export const MyDaRContainer = styled.div`
  width: fit-content;
  display: flex;
  color: #212121;
  font-size: 36px;
  font-weight: 700;
`;

export const MyDiary = styled(NavLink)`
  margin: 0 30px 0 30px;
  width: fit-content;
  color: grey;
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: #212121;
  }
`;
