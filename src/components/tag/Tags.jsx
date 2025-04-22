import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeSearchData } from "../../features/diaries/diarySlice";
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onTagClick = (hashtag) => {
    dispatch(changeSearchData({ searchType: "HASHTAG", searchValue: hashtag }));
    navigate("/comm");
  };

  return (
    <>
      {hashtags?.map((tag) => (
        <TagChip key={tag.id} onClick={() => onTagClick(tag.hashtag)}>
          {tag.hashtag}
        </TagChip>
      ))}
    </>
  );
};

export default Tags;
