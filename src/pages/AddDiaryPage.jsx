import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as S from "./AddDiaryPage.styled";
import MoreTimeRoundedIcon from "@mui/icons-material/MoreTimeRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import TagInput from "../components/TagInput";

const AddDiaryPage = () => {
  const [isPublic, setIsOpen] = useState(false);
  const onLockClicked = () => {
    if (isPublic === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <S.InputContainer>
      <h1>일지 작성하기🏋️</h1>
      <S.TitleWrapper>
        <TextField id="outlined-multiline-flexible" label="제목" fullWidth />
      </S.TitleWrapper>
      <S.ContentWrapper>
        <TextField
          id="outlined-multiline-static"
          label="내용"
          multiline
          rows={15}
          fullWidth
          color="grey"
        />
      </S.ContentWrapper>
      <S.TagnIconsContainer>
        <S.TagWrapper>
          {/* <TextField
            id="outlined-multiline-flexible"
            label="태그"
            color="grey"
            fullWidth
          /> */}
          태그
          <TagInput />
        </S.TagWrapper>
        <S.IconsContainer>
          {isPublic ? (
            <LockOpenRoundedIcon
              onClick={onLockClicked}
              sx={{ fontSize: 40, color: "##212121", cursor: "pointer" }}
            />
          ) : (
            <LockRoundedIcon
              onClick={onLockClicked}
              sx={{ fontSize: 40, color: "##212121", cursor: "pointer" }}
            />
          )}
          <MoreTimeRoundedIcon
            sx={{ fontSize: 40, color: "##212121", cursor: "pointer" }}
          />
          <PhotoRoundedIcon
            sx={{ fontSize: 40, color: "##212121", cursor: "pointer" }}
          />
          <SmartDisplayRoundedIcon
            sx={{ fontSize: 40, color: "##212121", cursor: "pointer" }}
          />
        </S.IconsContainer>
        <S.SubmitBtnWrapper>
          <Button variant="outlined" href="/">
            작성
          </Button>
        </S.SubmitBtnWrapper>
      </S.TagnIconsContainer>
    </S.InputContainer>
  );
};

export default AddDiaryPage;
