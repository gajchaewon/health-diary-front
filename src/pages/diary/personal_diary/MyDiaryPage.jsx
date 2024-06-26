import React, { useEffect, useState } from "react";
import * as S from "./MyDiaryPage.styled";
import Diarycard from "../../../components/diaryCard/DiaryCard";
import { useLazyGetMyDiariesQuery } from "../../../features/diaries/diaryApiSlice";
import {
  getMyDiaries,
  selectMyDiaries,
} from "../../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import WorkoutCalendar from "../../../components/calendar/WorkoutCalendar";

const MyDiaryPage = () => {
  const dispatch = useDispatch();
  const diaries = useSelector(selectMyDiaries);

  const [resultMsg, setResultMsg] = useState("");
  const [searchTrigger, { data: searchData, isLoading }] =
    useLazyGetMyDiariesQuery();
  const types = {
    TITLE: "제목",
    HASHTAG: "해시태그",
    CONTENT: "본문",
    DATE: "날짜",
  };
  const [searchType, setSearchType] = useState("TITLE");
  const [searchValue, setSearchValue] = useState("");

  const onSearchVauleChange = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    searchTrigger({ searchType, searchValue });
    if (!isLoading && searchData) {
      dispatch(getMyDiaries(searchData.content));
    } else if (isLoading) {
      setResultMsg("loading...");
      if (!searchData) {
        setResultMsg("다이어리가 없습니다. 다이어리를 작성해주세요.");
      }
    }
    console.log(searchData);
  }, [isLoading, searchData]);

  const onSearchBtnClick = async () => {
    if (searchType && searchValue) {
      console.log(searchType, searchValue);
      const res = await searchTrigger({ searchType, searchValue }); // trigger의 결과를 기다림
      console.log(res.data);
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
      <S.CalendarContainer>
        <S.CalendarWrapper>
          <WorkoutCalendar />
        </S.CalendarWrapper>
        {/* <S.CalendarBtn>지난달</S.CalendarBtn>
        <S.CalendarBtn>다음달</S.CalendarBtn> */}
      </S.CalendarContainer>

      <S.DiaryCardContainer>
        <S.SearchbardWrapper>
          <select
            onChange={(e) => setSearchType(e.target.value)}
            value={searchType}
            // style={{ position }}
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
        {/* <Link to="/adddiary">작성하기</Link> */}
        <S.CommunityCardContainer>
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
        </S.CommunityCardContainer>
      </S.DiaryCardContainer>
    </S.MyDiaryContainer>
  );
};

export default MyDiaryPage;
