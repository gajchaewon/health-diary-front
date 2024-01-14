import styled from "styled-components";
import { Link } from "react-router-dom";

export const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 500px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  margin: 50px 60px;
  padding: 50px;
  border-radius: 0.6rem;
`;

export const PictureinCard = styled.div`
  width: 300px;
  height: 150px;
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

const DiaryCard = () => {
  return (
    <CommunityCard>
      <TitleinCard to="/comm/diaryId">제목</TitleinCard>
      <NicknameinCard>닉네임</NicknameinCard>
      <PictureinCard />
      <ContentinCard>글</ContentinCard>
    </CommunityCard>
  );
};

export default DiaryCard;
