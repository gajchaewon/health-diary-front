import styled from "styled-components";
import { Link } from "react-router-dom";

export const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  height: 600px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  margin: 50px 70px;
  padding: 50px;
  border-radius: 0.6rem;
`;

export const PictureinCard = styled.div`
  width: 400px;
  height: 250px;
  margin: 20px 0;
  background-color: white;
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

const DiaryCard = ({ diary, key }) => {
  console.log(diary);
  return (
    <CommunityCard>
      <TitleinCard to="/comm/diaryId">{diary[1].title}</TitleinCard>
      <NicknameinCard>{diary[1].nickname}</NicknameinCard>
      <PictureinCard />
      <ContentinCard>{diary[1].content}</ContentinCard>
    </CommunityCard>
  );
};

export default DiaryCard;
