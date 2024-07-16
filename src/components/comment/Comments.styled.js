import styled from "styled-components";

export const CommentsContainer = styled.div`
  width: 100%;
`;

export const CommentTextarea = styled.div`
  display: flex;
  margin: 20px 0;
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
