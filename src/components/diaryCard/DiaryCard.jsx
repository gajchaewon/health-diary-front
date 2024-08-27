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
import Tags from "../tag/Tags";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import NicknameToProfile from "../profile/NicknameToProfile";

export const CommunityCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 450px;
  height: 600px;
  margin: 10px 0;
  box-sizing: border-box;
  background-color: #fcfeff;
  padding: 45px;
  border-radius: 0.6rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden; /* 추가: 자식 요소가 넘칠 경우 숨기도록 설정 */
`;

export const PictureinCard = styled.img`
  width: 100%;
  height: 220px; /* 이미지 높이를 고정된 값으로 설정 */
  margin: 20px 0;
  box-sizing: border-box;
`;

export const TitleinCard = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: fit-content;
`;
export const NicknameinCardWrapper = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: flex-end;
`;

export const ContentinCard = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 최대 3줄까지만 표시 */
  line-height: 1.5em; /* 줄 간격 조정 */
  max-height: calc(3 * 1.5em); /* 3줄까지만 보이도록 높이 제한 */
  box-sizing: border-box;
`;

export const BtnContainer = styled.div`
  position: absolute;
  width: fit-content;
  display: flex;
  right: 30px;
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

export const TagsContainer = styled.div`
  max-height: 65px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-wrap: wrap; /* 해시태그들이 줄을 넘어가면 다음 줄로 이동 */
  overflow: hidden; /* 넘치는 해시태그 숨기기 */
  position: absolute;
  bottom: 80px;
`;

export const CardInfo = styled.div`
  display: flex;
  padding: 3px;
  margin: 10px 5px;
  align-items: center;
  justify-content: center;
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
      {console.log(diary)}
      <CommunityCard>
        <TitleinCard to={`/diary/${diary.id}`} state={{ diary: diary }}>
          {diary.title}
        </TitleinCard>
        <NicknameinCardWrapper>
          <NicknameToProfile diary={diary} />
        </NicknameinCardWrapper>
        {diary?.images.length > 0 ? (
          <PictureinCard src={diary?.images[0]?.url} alt="pic" />
        ) : (
          <PictureinCard src={`/${RandomImage()}`} alt="rpic" />
        )}

        <ContentinCard>{diary.content}</ContentinCard>
        <TagsContainer>
          <Tags hashtags={diary.hashtags} />
        </TagsContainer>
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
          <BtnContainer>
            <CardInfo>
              <FavoriteRoundedIcon
                sx={{ fontSize: "24px", color: "#384958" }}
              />
              &ensp;{diary?.likeInfo?.totalCount}
            </CardInfo>
            <CardInfo>
              <InsertCommentOutlinedIcon
                sx={{ fontSize: "24px", color: "#384958" }}
              />
            </CardInfo>
          </BtnContainer>
        )}
      </CommunityCard>
    </>
  );
};

export default DiaryCard;
