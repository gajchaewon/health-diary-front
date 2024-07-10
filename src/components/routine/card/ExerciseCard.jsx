import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as S from "./ExerciseCard.style";

const ExerciseCard = ({ exercise }) => {
  const [exerciseName, setExerciseName] = useState(
    exercise?.exerciseName || ""
  );
  const [description, setDescription] = useState(exercise?.description || "");

  const [isEditing, setIsEditing] = useState(!exerciseName);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
    handleMoreClose();
  };

  return (
    <S.ExerciseCardContainer>
      {isEditing ? (
        <>
          <TextField
            label="Exercise Name"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
            multiline
          />
        </>
      ) : (
        <>
          <div>{exerciseName}</div>
          <div>{description}</div>
        </>
      )}
      <IconButton onClick={handleMoreClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMoreClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </S.ExerciseCardContainer>
  );
};

export default ExerciseCard;
