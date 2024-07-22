import React, { useEffect, useState } from "react";
import * as S from "./MyDiaryPage.styled";
import Diarycard from "../../../components/diaryCard/DiaryCard";
import { useLazyGetMyDiariesQuery } from "../../../features/diaries/diaryApiSlice";
import SearchIcon from "@mui/icons-material/Search";
import WorkoutCalendar from "../../../components/calendar/WorkoutCalendar";

const MyDiaryPage = () => {
  const [resultMsg, setResultMsg] = useState("");
  const [searchTrigger, { data: searchData, isLoading, isError }] =
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

  const fetchData = async () => {
    try {
      const res = await searchTrigger({ searchType, searchValue }).unwrap();
      console.log(res);
      if (res.content.length !== 0) {
        setResultMsg("");
      } else if (res.empty === true) {
        setResultMsg("검색결과가 없습니다.");
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setResultMsg("검색 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTrigger, searchType]);

  useEffect(() => {
    if (isError) {
      setResultMsg("검색 중 오류가 발생했습니다.");
    }
  }, [isError, isLoading]);

  const onSearchBtnClick = async () => {
    if (searchType) {
      console.log(searchType, searchValue);
      fetchData();
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
          <S.SearchbarWrapper>
            <S.Searchbar
              placeholder="검색"
              onChange={onSearchVauleChange}
            ></S.Searchbar>
            <S.SearchbarImg>
              <SearchIcon onClick={onSearchBtnClick} />
            </S.SearchbarImg>
          </S.SearchbarWrapper>
        </S.SearchbardWrapper>
        <S.DiaryCardSortBtn>날짜순 ▼</S.DiaryCardSortBtn>
        {/* <Link to="/adddiary">작성하기</Link> */}
        <S.CommunityCardContainer>
          {isLoading ? (
            <div style={{ margin: "15%" }}>Loading...</div>
          ) : searchData && searchData.content.length ? (
            searchData.content.map((diary) => (
              <div key={diary.id}>
                <Diarycard diary={diary} />
              </div>
            ))
          ) : (
            <S.NoneSearchDataCard>
              <S.ResultMessage>{resultMsg}</S.ResultMessage>
            </S.NoneSearchDataCard>
          )}
        </S.CommunityCardContainer>
      </S.DiaryCardContainer>
    </S.MyDiaryContainer>
  );
};

export default MyDiaryPage;
