import styled from "styled-components";
import { Link } from "react-router-dom";

export const PictureinCard = styled.div`
  width: 500px;
  height: 250px;
  margin: 20px 0;
  background-color: white;
`;

export const TitleinCard = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
`;

export const NicknameinCard = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: flex-end;
`;

export const ContentinCard = styled.div`
  font-size: 18px;
  width: 500px;
  flex-wrap: wrap;
`;

const DiaryCard = (props) => {
  return (
    <div>
      <TitleinCard to="/comm/diaryId">{props.title}</TitleinCard>
      <PictureinCard />
      <ContentinCard>{props.content}</ContentinCard>
    </div>
  );
};

export default DiaryCard;
