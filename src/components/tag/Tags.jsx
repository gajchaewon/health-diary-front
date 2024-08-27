import React from "react";
import styled from "styled-components";

export const TagChip = styled.div`
  width: fit-content;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid lightblue;
  box-sizing: border-box;
  border-radius: 2rem;
  font-size: 12px;
  font-weight: 500;
  color: #212121;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const Tags = ({ hashtags }) => {
  return (
    <>
      {hashtags?.map((tag) => (
        <TagChip>{tag.hashtag}</TagChip>
      ))}
    </>
  );
};

export default Tags;
