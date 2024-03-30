import React, { useEffect, useState } from "react";
import * as S from "./MyDiaryPage.styled";
import Diarycard from "../../../components/DiaryCard";
import { useLazyGetMyDiariesQuery } from "../../../features/diaries/diaryApiSlice";
import {
  getMyDiaries,
  selectCurrentDiaries,
} from "../../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const MyDiaryPage = () => {
  const dispatch = useDispatch();
  const diaries = useSelector(selectCurrentDiaries);
  console.log(diaries);
  const [resultMsg, setResultMsg] = useState("");
  const [searchTrigger, { data: searchData, isLoading }] =
    useLazyGetMyDiariesQuery();
  const types = {
    TITLE: "제목",
    HASHTAG: "해시태그",
    CONTENT: "본문",
    DATE: "날짜",
  };
  const [option, setOption] = useState("TITLE");
  const [searchValue, setSearchValue] = useState("");

  const onSearchVauleChange = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    searchTrigger({ option, searchValue });
    if (!isLoading && searchData) {
      dispatch(getMyDiaries(searchData.content));
    } else if (isLoading) {
      setResultMsg("loading...");
    }
  }, [isLoading, searchData]);

  const onSearchBtnClick = async () => {
    if (option && searchValue) {
      console.log(option, searchValue);
      const res = await searchTrigger({ option, searchValue }); // trigger의 결과를 기다림
      // 여기서 바로 response를 사용하여 조건 처리
      if (res.data.content.length !== 0) {
        dispatch(getMyDiaries(res.content));
      } else if (res.data.empty === true) {
        setResultMsg("검색결과가 없습니다.");
      }
    }
  };

  return (
    <S.MyDiaryContainer>
      <S.MyDiary>나의 운동일지</S.MyDiary>
      <S.CalendarContainer>
        <S.CalendarBtn>지난달</S.CalendarBtn>
        <S.CalendarWrapper>달력</S.CalendarWrapper>
        <S.CalendarBtn>다음달</S.CalendarBtn>
      </S.CalendarContainer>

      <S.SearchbardWrapper>
        <select
          onChange={(e) => setOption(e.target.value)}
          value={option}
          defaultValue="TITLE"
          style={{ padding: "5px" }}
        >
          {Object.entries(types).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <S.Searchbar
          placeholder="검색"
          onChange={onSearchVauleChange}
        ></S.Searchbar>
        <S.SearchbarImg>
          <SearchIcon onClick={onSearchBtnClick} />
        </S.SearchbarImg>
      </S.SearchbardWrapper>
      <S.DiaryCardSortBtn>날짜순 ▼</S.DiaryCardSortBtn>
      <S.DiaryCardContainer>
        {diaries && diaries.length ? (
          Object.entries(diaries).map((diary) => (
            <div key={diary}>
              <Diarycard diary={diary[1]} />
            </div>
          ))
        ) : (
          <>
            <div style={{ margin: "15%" }}>{resultMsg}</div>
          </>
        )}
      </S.DiaryCardContainer>
    </S.MyDiaryContainer>
  );
};

export default MyDiaryPage;
