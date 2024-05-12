import React, { useEffect, useState } from "react";
import * as S from "./CommPage.styled";
import SearchIcon from "@mui/icons-material/Search";
import Diarycard from "../../components/DiaryCard";
import {
  selectCurrentDiaries,
  getAllDiaries,
} from "../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllDiariesQuery } from "../../features/diaries/diaryApiSlice";

const CommPage = () => {
  const { data, isLoading } = useGetAllDiariesQuery();
  const diaries = data?.content;
  console.log(diaries);

  return (
    <>
      {!data || data.length === 0 ? (
        <S.DiaryContainers>Loading...</S.DiaryContainers>
      ) : (
        <S.DiaryContainers>
          <S.Comm>커뮤니티</S.Comm>
          <S.SearchbardWrapper>
            <S.SearchbarImg>
              <SearchIcon />
            </S.SearchbarImg>
            <S.Searchbar placeholder="검색"></S.Searchbar>
          </S.SearchbardWrapper>
          <S.CommunityCardContainer>
            {Object.entries(diaries).map((diary) => (
              <div key={diary[1].id}>
                <Diarycard diary={diary[1]} />
              </div>
            ))}
          </S.CommunityCardContainer>
        </S.DiaryContainers>
      )}
    </>
  );
};

export default CommPage;
