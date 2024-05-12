import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 100px;
  padding: 0 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: #212121;
  font-size: 45px;
  font-weight: 700;
  align-self: flex-start;
`;

export const Nickname = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  font-size: 25px;
  font-weight: 500;
  color: #212121;
  width: 30%;
`;

export const Picture = styled.img`
  width: 43vw;
  height: 45vh;
  margin: 20px 0;
  background-color: pink;
`;

export const Content = styled.div`
  align-self: flex-start;
  width: 43vw;
  margin: 20px 0;
  font-size: 20px;
`;

export const Divider = styled.div`
  border-top: 1px solid #444444;
  margin: 30px 0px;
  width: 100%;
`;
