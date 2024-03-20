import React from "react";
import * as S from "./CommPage.styled";
import SearchIcon from "@mui/icons-material/Search";
import Diarycard from "../../components/DiaryCard";

const CommPage = () => {
  return (
    <>
      <S.DiaryContainers>
        <S.Comm>커뮤니티</S.Comm>
        <S.SearchbardWrapper>
          <S.SearchbarImg>
            <SearchIcon />
          </S.SearchbarImg>
          <S.Searchbar placeholder="검색"></S.Searchbar>
        </S.SearchbardWrapper>
        <S.CommunityCardContainer>
          <Diarycard />
          <Diarycard />
          <Diarycard />
          <Diarycard />
          <Diarycard />
          <Diarycard />
          <Diarycard />
        </S.CommunityCardContainer>
      </S.DiaryContainers>
    </>
  );
};

export default CommPage;
