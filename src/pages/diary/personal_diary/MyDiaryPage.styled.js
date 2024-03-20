import styled from "styled-components";

export const MyDiaryContainer = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyDiary = styled.div`
  padding: 0 16%;
  color: #212121;
  font-size: 45px;
  font-weight: 700;
  align-self: flex-start;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
`;

export const CalendarWrapper = styled.div`
  background-color: aliceblue;
  width: 691px;
  height: 600px;
`;

export const CalendarBtn = styled.button`
  width: 8%;
  height: 40px;
  border-radius: 1rem;
  background-color: lightgrey;
  border: none;
  margin: 20px;
  color: grey;
  cursor: pointer;
  &:hover {
    background-color: darkgrey;
    color: white;
  }
`;

export const DiaryCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const DiaryCardSortBtn = styled.button`
  padding: 0 10%;
  color: #212121;
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-self: flex-start;
  font-size: 20px;
`;
