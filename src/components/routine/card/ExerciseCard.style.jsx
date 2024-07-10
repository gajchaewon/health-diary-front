import { TextField } from "@mui/material";
import styled from "styled-components";

export const ExerciseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ExerciseInput = styled(TextField)`
  font-size: 18px;
  font-family: "Noto Sans KR";
  margin: 10px;
`;

export const ExerciseName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ExerciseDesc = styled.div`
  font-size: 16px;
`;

export const IconBtnWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 5px;
  right: 5px;
`;
