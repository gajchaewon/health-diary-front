import { Link } from "react-router-dom";
import styled from "styled-components";

export const Comments = styled.div`
  margin-left: 60px;
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: 700;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 60px;
  background-color: aliceblue;
  width: 80%;
  border-bottom: 0.5px solid gray;
  overflow: hidden;
  word-wrap: break-word;
  box-sizing: border-box;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  width: fit-content;
  align-self: flex-end;
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Comment = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const DiaryLinkWrapper = styled.div`
  display: flex;
  font-size: 18px;
`;

export const DiaryLink = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
`;

export const Date = styled.div`
  font-size: 16px;
  width: fit-content;
  align-self: end;
`;
