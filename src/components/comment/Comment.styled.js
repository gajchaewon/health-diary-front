import styled from "styled-components";
import { Link } from "react-router-dom";

export const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  position: relative;
  padding: 15px;
  margin: 30px 0px;
  display: flex;
  flex-direction: column; // 수직 정렬
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
  overflow: hidden;
  word-wrap: break-word;
`;

export const CommentsUser = styled(Link)`
  width: auto;
  margin-bottom: 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

export const CommentContent = styled.div`
  white-space: pre-wrap;
  margin-bottom: 30px;
  width: auto;
`;
export const CommentActions = styled.div`
  display: flex;
  position: absolute;
  right: 12px;
  top: 5px;
`;

export const CommentDate = styled.div`
  position: absolute;
  bottom: 15px;
  margin-top: 10px;
  width: auto;
  font-size: 12px;
`;

export const CommentButton = styled.button`
  width: fit-content;
  padding: 3px;
  margin: 5px 0 0 5px;
  color: black;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const CommentTextarea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const CommentTextareaBtn = styled.button`
  width: 100px;
  height: auto;
  margin-left: 3px;
  background-color: lightgrey;
  color: black;
  border: 1px solid lightgray;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 10px;
  height: fit-content;
  border: 0;
  border-radius: 3px;
  outline: none;
  border: 0.5px solid lightgrey;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  resize: none;
  display: inline-block;
`;
