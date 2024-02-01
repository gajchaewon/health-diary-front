import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as S from "./AddDiaryPage.styled";
import MoreTimeRoundedIcon from "@mui/icons-material/MoreTimeRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import TagInput from "../components/TagInput";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const AddDiaryPage = () => {
  const [isPublic, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const onLockClicked = () => {
    setIsOpen(!isPublic);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const urlList = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...urlList]);
  };

  const handleImageDelete = () => {
    //사진 삭제 api 넣기(실제 삭제 기능은 구현되지x)
    const updatedImages = [...images];
    updatedImages.splice(currentPage, 1);
    setImages(updatedImages);
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
          <input
            type="file"
            multiple
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            onChange={handleImageUpload}
          />
          <label htmlFor="icon-button-file">
            <PhotoRoundedIcon
              sx={{ fontSize: 40, color: "##212121", cursor: "pointer" }}
            />
          </label>
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
      {images.length > 0 && (
        <S.PreviewnBtnContainer>
          업로드된 사진 미리보기
          <S.PreviewContainer>
            <S.PrevButton onClick={prevPage} disabled={currentPage === 0}>
              <ArrowBackIosNewRoundedIcon sx={{ fontSize: 40 }} />
            </S.PrevButton>
            <S.ImagePreview src={images[currentPage]} alt="preview" />
            <S.DeleteButton onClick={handleImageDelete}>
              <DeleteIcon />
            </S.DeleteButton>
            <S.NextButton
              onClick={nextPage}
              disabled={currentPage === images.length - 1}
            >
              <ArrowForwardIosRoundedIcon sx={{ fontSize: 40 }} />
            </S.NextButton>
          </S.PreviewContainer>
        </S.PreviewnBtnContainer>
      )}
    </S.InputContainer>
  );
};

export default AddDiaryPage;
