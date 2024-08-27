import styled from "styled-components";

export const DiaryContainers = styled.div`
  margin: 50px 100px;
`;

export const Comm = styled.div`
  margin-left: 10%;
  color: #212121;
  font-size: 45px;
  font-weight: 700;
`;

export const SearchbardWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  width: 91%;
  height: 40px;
  font-size: 45px;
`;

export const SearchbarImg = styled.button`
  padding-right: 10px;
  display: flex;
  position: absolute;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Searchbar = styled.input`
  width: 30%;
  padding-left: 10px;
`;

export const CommunityCardContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
`;
