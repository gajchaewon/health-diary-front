import React, { useEffect, useState } from "react";
import * as S from "./CommPage.styled";
import SearchIcon from "@mui/icons-material/Search";
import Diarycard from "../../components/DiaryCard";
import { selectCurrentDiaries } from "../../features/diaries/diarySlice";
import { useSelector } from "react-redux";

const CommPage = () => {
  const res = useSelector(selectCurrentDiaries);
  const [diaries, setDiaries] = useState([]);
  useEffect(() => {
    setDiaries(res);
  }, []);

  console.log(diaries);
  return (
    <>
      {!diaries || Object.keys(diaries).length === 0 ? (
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
              <div key={diary.id}>
                <Diarycard diary={diary} />
              </div>
            ))}
          </S.CommunityCardContainer>
        </S.DiaryContainers>
      )}
    </>
  );
};

export default CommPage;
