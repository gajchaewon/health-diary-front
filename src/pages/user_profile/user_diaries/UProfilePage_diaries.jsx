import React from "react";
import * as GlobalSytle from "../UserProfile.style";
import * as S from "./UProfilePage_diaries.styled";
import { useGetUsersDiariesQuery } from "../../../features/profile/profileApiSlice";
import { useParams } from "react-router-dom";
import CardDiary from "../../../components/diaryCard/CardDiary";

const UProfilePageDiaries = () => {
  const { userId } = useParams();
  const { data: fetchUserDiaries, isLoading: isFetching } =
    useGetUsersDiariesQuery(userId);
  return (
    <GlobalSytle.Container>
      <S.DiariesContainer>
        {fetchUserDiaries ? (
          <S.DiariesGrid>
            {fetchUserDiaries.content.map((diary) => (
              <CardDiary diary={diary} key={diary.id} />
            ))}
          </S.DiariesGrid>
        ) : (
          <></>
        )}
      </S.DiariesContainer>
    </GlobalSytle.Container>
  );
};

export default UProfilePageDiaries;
