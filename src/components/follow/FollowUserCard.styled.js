import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 10px;
  width: 700px;
  height: 100px;
  border-radius: 0.8rem;
  background-color: aliceblue;
`;

export const Userpic = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: cornflowerblue;
`;

export const Nickname = styled(NavLink)`
  width: fit-content;
  text-decoration: none;
  color: #212121;
  font-size: 28px;
`;

export const FollowBtnWrapper = styled.div`
  position: absolute;
  right: 1px;
`;
