import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MyProfileContainer = styled.div`
  height: 100vh;
  margin: 50px 100px;
  display: flex;
  cursor: default;
`;

export const ProfileMenuContainer = styled.div`
  width: 15%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 0.5px solid lightblue;
`;

export const ProfileMenu = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const ProfileMenuBtn = styled(NavLink)`
  max-width: fit-content;
  margin: 15px 0 0 0;
  font-size: 20px;
  text-decoration: none;
  color: grey;
  cursor: pointer;
  &.active {
    font-weight: bold;
    color: #212121;
    background-color: aliceblue;
  }
`;

export const ProfileComponenetWrapper = styled.div`
  margin-left: 18%;
  padding: 0 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
