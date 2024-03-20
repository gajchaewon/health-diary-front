import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px;
`;

export const Login = styled.div`
  color: #212121;
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 50px 0;
`;

export const IdPwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
`;

export const LoginBtn = styled(Link)`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 30px 0;
  padding: 10px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 0.3rem;
  background-color: grey;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background-color: #212121;
  }
`;

export const SignUp = styled(Link)`
  margin: 30px 0;
  text-decoration: none;
  color: grey;
  &:hover {
    color: #212121;
  }
`;
