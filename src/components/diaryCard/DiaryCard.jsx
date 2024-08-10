import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { useDeleteDiaryMutation } from "../../features/diaries/diaryApiSlice";
import { useDispatch } from "react-redux";
import { deleteDiary } from "../../features/diaries/diarySlice";
import RandomImage from "../RandomImage";

export const CommunityCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 600px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  margin: 50px 70px;
  padding: 50px;
  border-radius: 0.6rem;
`;

export const PictureinCard = styled.img`
  width: 400px;
  height: 250px;
  margin: 20px 0;
`;

export const TitleinCard = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: fit-content;
`;
export const NicknameinCard = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: flex-end;
`;
export const ContentinCard = styled.div`
  font-size: 15px;
`;
export const BtnContainer = styled.div`
  position: absolute;
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  right: 3%;
  bottom: 2%;
`;
export const Btn = styled.button`
  margin: 4px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
`;

const DiaryCard = ({ diary }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deletion, { isLoading }] = useDeleteDiaryMutation();
  const isMyPage = location.pathname === "/my/diaries";

  const onDeleteBtnClick = async () => {
    if (window.confirm("다이어리를 삭제 하시겠습니까?")) {
      try {
        await deletion(diary.id).unwrap();
        dispatch(deleteDiary(diary.id));
        alert("다이어리가 삭제되었습니다.");
      } catch (err) {
        console.error("다이어리 삭제에 실패했습니다.", err);
      }
    }
  };

  const onEditBtnClick = async () => {
    if (window.confirm("다이어리를 수정 하시겠습니까?")) {
      navigate(`/editdiary/${diary.id}`, { state: { diary: diary } });
    }
  };

  return (
    <>
      {console.log(diary?.images)}
      <CommunityCard>
        <TitleinCard to={`/diary/${diary.id}`} state={{ diary: diary }}>
          {diary.title}
        </TitleinCard>
        <NicknameinCard>{diary.nickname}</NicknameinCard>
        {diary?.images.length > 0 ? (
          <PictureinCard src={diary?.images[0]?.url} alt="pic" />
        ) : (
          <PictureinCard src={`/${RandomImage()}`} alt="rpic" />
        )}

        <ContentinCard>{diary.content}</ContentinCard>
        {isMyPage ? (
          <BtnContainer>
            <Btn onClick={onEditBtnClick}>
              <EditTwoToneIcon />
            </Btn>
            <Btn onClick={onDeleteBtnClick}>
              <DeleteTwoToneIcon />
            </Btn>
          </BtnContainer>
        ) : (
          <div></div>
        )}
      </CommunityCard>
    </>
  );
};

export default DiaryCard;
