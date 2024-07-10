import React, { useEffect, useState } from "react";
import * as S from "./CommPage.styled";
import SearchIcon from "@mui/icons-material/Search";
import Diarycard from "../../components/diaryCard/DiaryCard";
import {
  selectCurrentDiaries,
  getAllDiaries,
} from "../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllDiariesQuery } from "../../features/diaries/diaryApiSlice";
import Pagination from "../../components/pagination/Pagination";
const CommPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const { data, isLoading } = useGetAllDiariesQuery({
    page: currentPage,
    size: pageSize,
  });
  const diaries = data?.content;
  console.log(data);

  useEffect(() => {
    setTotalPages(data?.totalPages);
  }, [currentPage, data?.totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </S.DiaryContainers>
      )}
    </>
  );
};

export default CommPage;
