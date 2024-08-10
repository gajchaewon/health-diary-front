import styled from "styled-components";
import { Link } from "react-router-dom";
import RandomImage from "../RandomImage";

export const SmallDiaryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 600px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  overflow: auto; // 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none; // 웹킷 기반 브라우저에서 스크롤바 숨기기
  }
`;

export const PictureinCard = styled.img`
  width: 500px;
  height: 400px;
  box-sizing: border-box;
  height: 250px;
  margin: 20px 0;
  background-color: white;
`;

export const TitleinCard = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: 80%;
`;

export const NicknameinCard = styled.img`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: flex-end;
`;

export const ContentinCard = styled.div`
  font-size: 18px;
`;

const DiaryCard = (props) => {
  return (
    <>
      <SmallDiaryCard>
        <TitleinCard to={`/diary/${props.diaryId}`}>{props.title}</TitleinCard>
        {props?.images?.length > 0 ? (
          <PictureinCard src={props?.images[0]?.url} alt="pic" />
        ) : (
          <PictureinCard src={`/${RandomImage()}`} alt="rpic" />
        )}
        <ContentinCard>{props.content}</ContentinCard>
      </SmallDiaryCard>
    </>
  );
};

export default DiaryCard;
