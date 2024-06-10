import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const ProfilePic = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  font-size: 70px;
`;

export const Nickname = styled.div`
  margin: 15px;
  width: fit-content;
  color: #212121;
  font-size: 50px;
  font-weight: 700;
`;

export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FollowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 18px;
  margin: 20px;
`;

export const FollowBtn = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 24px;
  font-weight: 500;
  font-weight: 500;
  margin: 5px;
  text-decoration: none;
  color: #212121;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  border-bottom: 1px solid aliceblue;
  margin: 10px;
`;
