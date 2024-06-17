import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const PictureinCard = styled.div`
  width: 80%;
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
        <PictureinCard />
        <ContentinCard>{props.content}</ContentinCard>
      </SmallDiaryCard>
    </>
  );
};

export default DiaryCard;
