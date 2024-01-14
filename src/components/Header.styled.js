import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  height: 15vh;
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

export const HeaderProfile = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 2%;
  background-color: lightgrey;
  font-size: 30px;
  text-decoration: none;
  &:hover {
    background-color: #434343;
  }
`;
