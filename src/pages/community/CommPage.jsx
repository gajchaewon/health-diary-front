import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./CommPage.styled";
import SearchIcon from "@mui/icons-material/Search";
import Diarycard from "../../components/diaryCard/DiaryCard";
import { useLazyGetAllDiariesQuery } from "../../features/diaries/diaryApiSlice";
import Pagination from "../../components/pagination/Pagination";
import { changeSearchData } from "../../features/diaries/diarySlice";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const CommPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  const [searchTrigger, { data: searchData, isLoading }] =
    useLazyGetAllDiariesQuery();

  const diaries = searchData?.content;

  const searchType = useSelector((state) => state.diary.search.searchType);
  const searchValue = useSelector((state) => state.diary.search.searchValue);

  const [resultMsg, setResultMsg] = useState("");

  const fetchData = async () => {
    try {
      const res = await searchTrigger({
        searchType: searchType,
        searchValue: searchValue,
        page: currentPage,
        size: pageSize,
      }).unwrap();
      if (res.content.length === 0 && res.empty) {
        setResultMsg("검색결과가 없습니다.");
      } else {
        setResultMsg("");
      }
      setTotalPages(res.totalPages);
      setPageSize(res.size);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setResultMsg("검색 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (searchType) {
      fetchData();
    }
  }, [searchType, currentPage, pageSize]);

  useEffect(() => {
    if (searchType === "HASHTAG") {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onSearchBtnClick = () => {
    if (searchType && searchValue) {
      setCurrentPage(0);
      fetchData();
    }
  };

  const onCommClick = () => {
    dispatch(changeSearchData({ searchType: "TITLE", searchValue: "" }));
    window.location.reload();
  };

  return (
    <>
      <S.DiaryContainers>
        <S.Comm onClick={onCommClick}>커뮤니티</S.Comm>
        <S.SearchbardWrapper>
          <select
            onChange={(e) =>
              dispatch(
                changeSearchData({
                  searchType: e.target.value,
                  searchValue: "",
                })
              )
            }
            value={searchType}
          >
            <option value="TITLE">제목</option>
            <option value="HASHTAG">해시태그</option>
            <option value="CONTENT">본문</option>
            <option value="DATE">날짜</option>
          </select>
          <S.Searchbar
            placeholder="검색"
            value={searchValue}
            onChange={(e) =>
              dispatch(
                changeSearchData({ searchType, searchValue: e.target.value })
              )
            }
          />
          <S.SearchbarImg>
            <SearchIcon onClick={onSearchBtnClick} />
          </S.SearchbarImg>
        </S.SearchbardWrapper>

        {/* Loading State */}
        {isLoading ? (
          <S.CommunityCardContainer>
            <CircularProgress />
          </S.CommunityCardContainer>
        ) : (
          <>
            {/* Show result message if there's no data */}
            {resultMsg ? (
              <div>{resultMsg}</div>
            ) : (
              <>
                <S.CommunityCardContainer>
                  {diaries?.map((diary) => (
                    <div key={diary.id} style={{ margin: "30px 50px" }}>
                      <Diarycard diary={diary} />
                    </div>
                  ))}
                </S.CommunityCardContainer>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </>
        )}
      </S.DiaryContainers>
    </>
  );
};

export default CommPage;
