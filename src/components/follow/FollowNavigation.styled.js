import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FollowContainer = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: 700;
`;

export const FollowMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  //background-color: aliceblue;
`;

export const FollowMenu = styled(NavLink)`
  width: fit-content;
  margin: 0px 150px;
  text-decoration: none;
  display: flex;
  color: grey;
  cursor: pointer;
  &.active {
    font-weight: bold;
    color: #212121;
  }
`;

export const Divider = styled.div`
  border-top: 1px solid darkgrey;
  margin: 10px 0px;
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
