import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px;
`;

export const Signup = styled.div`
  color: #212121;
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 80px 0;
`;

export const IdPwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  width: 35%;
`;

export const SignupBtn = styled.button`
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
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background-color: #212121;
  }
`;

export const SignUp = styled.div`
  text-decoration: none;
  color: grey;
  &:hover {
    color: #212121;
  }
`;

export const TextBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Btn = styled.button`
  margin-left: 10px;
  border: none;
  width: 140px;
  height: 56px;
  border-radius: 0.2rem;
  background-color: transparent;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    border: 1.5px solid black;
    font-weight: bold;
  }
`;
