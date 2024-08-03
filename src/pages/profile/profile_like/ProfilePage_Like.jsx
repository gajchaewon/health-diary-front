import React, { useEffect, useState } from "react";
import * as S from "./ProfilePage_Like.styled";
import SDiaryCard from "../../../components/diaryCard/DiaryCard.S";
import { useGetLikedDiaryQuery } from "../../../features/profile/profileApiSlice";
import CardDiary from "../../../components/diaryCard/CardDiary";
import Pagination from "../../../components/pagination/Pagination";

const ProfilePageLike = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  const { data: fetchLikedDiaries, isLoading } = useGetLikedDiaryQuery({
    page: currentPage,
    size: pageSize,
  });

  useEffect(() => {
    setTotalPages(fetchLikedDiaries?.totalPages);
  }, [currentPage, fetchLikedDiaries?.totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {console.log(fetchLikedDiaries)}
      <S.LikedDiary>내가 좋아요한 일지</S.LikedDiary>
      <S.CardContainer>
        {fetchLikedDiaries ? (
          <>
            {fetchLikedDiaries.content.map((diary) => (
              <CardDiary diary={diary} key={diary.id} />
            ))}
          </>
        ) : (
          <>다이어리가 없습니다.</>
        )}
      </S.CardContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProfilePageLike;
