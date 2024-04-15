import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyDiaryContainer = styled.div`
  margin: 50px;
`;

export const MyDiaryLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 45px;
  font-weight: 700;
  margin: 50px;
`;

export const CalendarDiaryContainer = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
`;
export const CalendarWrapper = styled.div`
  background-color: aliceblue;
  width: 50%;
  height: 600px;
`;
export const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  width: 48%;
  height: 600px;
  padding: 50px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 600px;
`;

export const AddDiaryBtn = styled(Link)`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #434343;
  font-size: 90px;
  font-weight: 800;
  text-decoration: none;
  &:hover {
    color: #121212;
  }
`;

export const LoginBtn = styled(Link)`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  border-radius: 1.5rem;
  background-color: #434343;
  color: white;
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
  &:hover {
    background-color: #121212;
  }
`;

export const CommunityContainer = styled.div`
  margin: 80px 50px;
`;

export const CommunityLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 45px;
  font-weight: 700;
  margin: 50px;
`;

export const ListContainer = styled.div`
  margin: 0 40px;
`;

export const DiaryTitle = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 500;
`;

export const PaginationContainer = styled.div`
  display: flex;
`;

export const PaginationButton = styled.button`
  width: fit-content;
  color: black;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
`;
