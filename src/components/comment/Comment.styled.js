import styled from "styled-components";

export const Comments = styled.div`
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
  margin: 30px 0px;
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column; // 수직 정렬
`;

export const CommentsUser = styled.div`
  margin: 0 12px 0 0;
  width: auto;
  font-size: 20px;
  font-weight: 500;
`;

export const CommentContent = styled.div`
  margin-bottom: 12px;
  width: auto;
`;
export const CommentActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CommentDeleteButton = styled.button`
  width: 10%;
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
