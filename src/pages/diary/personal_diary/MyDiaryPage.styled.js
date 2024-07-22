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
export const SearchbarWrapper = styled.div`
  width: 30%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Searchbar = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin-left: 5px;
  padding-right: 40px; /* To make space for the button */
`;

export const SearchbarImg = styled.button`
  position: absolute;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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

export const NoneSearchDataCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  margin: 50px 70px;
  padding: 50px;
  border-radius: 0.6rem;
`;

export const ResultMessage = styled.div`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: fit-content;
`;
