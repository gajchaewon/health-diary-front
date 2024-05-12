import styled from "styled-components";

export const CommentTextarea = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
  height: auto;
`;

export const CommentTextareaBtn = styled.button`
  width: 10%;
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

export const CommentContainer = styled.div`
  margin: 30px 0px;
  width: 100%;
`;
