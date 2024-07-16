import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

// Main container
export const MainContainer = styled.div`
  padding: 30px;
`;

export const Card = styled.div`
  width: 500px;
  height: fit-content;
  margin: 20px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  overflow: hidden;
  word-wrap: break-word;
  //box-sizing: border-box;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

export const RoutineInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 5px;
  height: fit-content;
  border: 0;
  border-radius: 15px;
  outline: none;
  border: 0.5px solid lightgrey;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  font-weight: 600;
  resize: none;
  display: inline-block;
`;

export const RoutineNameInput = styled(RoutineInput)`
  font-size: 28px;
  height: 50px;
`;

export const CardLink = styled.a`
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);

  &::after {
    position: absolute;
    top: 25px;
    left: 0;
    content: "";
    width: 0%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  color: #ffffff;
  font-size: 28px;
  margin: 20px 0 10px 0;
`;

export const CardApply = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const IconBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  justify-content: space-between;
`;

export const IconBtn = styled(IconButton)`
  top: 0;
  right: 1px;
  display: flex;
  position: absolute;
  width: fit-content;
`;

// Card backgrounds
export const Card1 = styled(Card)`
  background: radial-gradient(#1fe4f5, #3fbafe);
`;

export const Card2 = styled(Card)`
  background: radial-gradient(#fbc1cc, #fa99b2);
`;

export const Card3 = styled(Card)`
  background: radial-gradient(#76b2fe, #b69efe);
`;

export const Card4 = styled(Card)`
  background: radial-gradient(#60efbc, #58d5c9);
`;

export const Card5 = styled(Card)`
  background: radial-gradient(#f588d8, #c0a3e5);
`;
