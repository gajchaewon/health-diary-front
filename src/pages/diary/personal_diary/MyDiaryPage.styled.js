import styled from "styled-components";

export const MyDiaryContainer = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyDaRContainer = styled.div`
  display: flex;
  //align-self: flex-start;
  color: #212121;
  font-size: 36px;
  font-weight: 700;
`;

export const MyDiary = styled.div`
  margin: 0 40px 0 0;
  width: fit-content;
  color: #212121;
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

export const SearchbardWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  width: 82%;
  height: 40px;
  font-size: 45px;
`;

export const SearchbarImg = styled.button`
  display: flex;
  position: absolute;
  padding: 8px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Searchbar = styled.input`
  display: flex;
  position: relative;
  width: 25%;
  padding-left: 10px;
  margin-left: 5px;
`;

export const CommunityCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
