import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  height: 25vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const HeaderLogo = styled(Link)`
  font-family: "Dela Gothic One", sans-serif;
  font-size: 70px;
  text-decoration: none;
  color: #212121;
`;

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10%;
`;

export const HeaderProfile = styled(Link)`
  width: fit-content;
  margin: 10px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  &:visited {
    color: black;
  }
`;

export const HeaderLogout = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 10px;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
`;
