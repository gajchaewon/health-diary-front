import { Fab, Typography } from "@mui/material";
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

export const ExerciseInputContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const AddExerciseContainer = styled.div`
  display: flex;
  flexdirection: column;
  alignitems: center;
  justifycontent: center;
  margintop: 20px;
`;

export const AddExerciseText = styled(Typography)({
  marginBottom: "8px",
});

export const AddExerciseButton = styled(Fab)({
  backgroundColor: "#4caf50 !important",
  color: "#fff !important",
  "&:hover": {
    backgroundColor: "#388e3c !important",
  },
});
