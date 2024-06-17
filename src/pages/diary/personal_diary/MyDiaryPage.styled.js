import styled from "styled-components";

export const MyDiaryContainer = styled.div`
  width: 100%;
  margin: 50px 100px;
  display: flex;
  padding: 100px;
`;

export const CalendarContainer = styled.div`
  position: sticky;
  top: 0px;
  width: 60%;
  height: fit-content;
  display: flex;
`;

export const CalendarWrapper = styled.div`
  background-color: aliceblue;
  width: 100%;
  margin-top: 50px;
`;

// export const CalendarBtn = styled.button`
//   width: 8%;
//   height: 40px;
//   border-radius: 1rem;
//   background-color: lightgrey;
//   border: none;
//   margin: 20px;
//   color: grey;
//   cursor: pointer;
//   &:hover {
//     background-color: darkgrey;
//     color: white;
//   }
// `;

export const DiaryCardContainer = styled.div`
  width: 80%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchbardWrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  height: 40px;
  font-size: 45px;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

export const Searchbar = styled.input`
  width: 30%;
  height: 9;
  display: flex;
  padding-left: 10px;
  margin-left: 5px;
  top: 0;
`;

export const SearchbarImg = styled.button`
  display: flex;
  position: absolute;
  justify-self: flex-end;
  padding: 8px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const DiaryCardSortBtn = styled.button`
  margin: 10px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #212121;
  background-color: transparent;
  left: 100px;
  top: 35px;
  position: absolute;
`;

export const CommunityCardContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* position: relative; */
`;
