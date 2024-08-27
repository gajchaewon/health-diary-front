import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as S from "./AddEditDiaryPage.styled";
import MoreTimeRoundedIcon from "@mui/icons-material/MoreTimeRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import TagInput from "../../../components/tag/TagInput";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { addDiary, editDiary } from "../../../features/diaries/diarySlice";
import {
  useAddDiaryMutation,
  useEditDiaryMutation,
  useUploadImageMutation,
  useDeleteImageMutation,
} from "../../../features/diaries/diaryApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const AddEditDiaryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isAddPage = location.pathname === "/adddiary";
  const { state } = useLocation(); //card에서 보내준 값
  const { diary } = state || {};

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [adding, { isLoading: isAddLoading }] = useAddDiaryMutation();
  const [editing, { isLoading: isEditLoading }] = useEditDiaryMutation();
  const [uploading, { isLoading: isImgUploadLoading }] =
    useUploadImageMutation();
  const [deleting, { isLoading: isImgDeletingLoading }] =
    useDeleteImageMutation();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onHashTagsChange = (value) => setHashtags(value);

  useEffect(() => {
    if (diary) {
      setTitle(diary.title);
      setContent(diary.content);
      setIsPublic(diary.isPublic);
      setHashtags(diary.hashtags.map((index) => index.hashtag));
    }
  }, [diary]);

  const onLockClicked = () => {
    setIsPublic(!isPublic);
  };

  const handleImageUpload = async (event) => {
    const formData = new FormData();
    if (event.target?.files !== null && !isImgUploadLoading) {
      try {
        formData.append("file", event.target.files[0]);
        console.log(event.target.files[0]);
        const res = await uploading(formData).unwrap();
        console.log(res);
        setImages([...images, res]);
        // const files = Array.from(event.target.files);
        // const urlList = files.map((file) => URL.createObjectURL(file));
        // setImages([...images, ...urlList]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleImageDelete = async (currentPage) => {
    try {
      await deleting(images[currentPage]?.imageId);
      const updatedImages = [...images];
      updatedImages.splice(currentPage, 1);
      setImages(updatedImages);
      setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
      console.log("삭제성공");
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const saveCheck = [title, content].every(Boolean) === true;

  const onSaveBtnClick = async () => {
    const imageIds = images.map((image) => image.imageId);
    if (saveCheck) {
      try {
        const diaryData = await adding({
          title,
          content,
          isPublic,
          hashtags,
          imageIds,
        }).unwrap();
        dispatch(addDiary({ ...diaryData }));
        setTitle("");
        setContent("");
        setIsPublic(false);
        setHashtags([]);
        setImages([]);
        navigate("/my/diaries");
      } catch (err) {
        console.log(err);
        console.log("posting failed");
        navigate("/adddiary");
      }
    }
  };

  const onEditBtnClick = async () => {
    const imageIds = images.map((image) => image.imageId);
    if (!isEditLoading) {
      try {
        const diaryData = await editing({
          diaryId: diary.id,
          title,
          content,
          isPublic,
          hashtags,
          imageIds,
        }).unwrap();
        dispatch(editDiary(diary.id, { ...diaryData }));
        navigate("/my/diaries");
      } catch (err) {
        console.log(err);
        console.log("failed");
      }
    }
  };

  return (
    <S.InputContainer>
      <h1>일지 작성하기🏋️</h1>
      {isAddPage || diary === null ? (
        <>
          <S.TitleWrapper>
            <TextField
              id="outlined-multiline-flexible"
              label="제목"
              onChange={onTitleChange}
              value={title}
              fullWidth
              inputProps={{ maxLength: 30 }}
            />
          </S.TitleWrapper>

          {images.length === 0 ? (
            <S.ContentWrapper>
              <TextField
                id="outlined-multiline-static"
                label="내용"
                multiline
                rows={15}
                fullWidth
                style={{ backgroundColor: "aliceblue" }}
                onChange={onContentChange}
                value={content}
                inputProps={{ maxLength: 250 }}
              />
            </S.ContentWrapper>
          ) : (
            <S.ContentWrapper style={{ width: "100%" }}>
              <TextField
                id="outlined-multiline-static"
                label="내용"
                multiline
                rows={15}
                style={{ width: "50%", backgroundColor: "aliceblue" }}
                onChange={onContentChange}
                value={content}
              />
              {images.length > 0 && (
                <S.PreviewnBtnContainer>
                  <S.PreviewContainer>
                    <S.PrevButton
                      onClick={prevPage}
                      disabled={currentPage === 0}
                    >
                      <ArrowBackIosNewRoundedIcon sx={{ fontSize: 40 }} />
                    </S.PrevButton>
                    <S.ImagePreview
                      src={images[currentPage].url}
                      alt="preview"
                    />
                    <S.DeleteButton
                      onClick={() => handleImageDelete(currentPage)}
                    >
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
            </S.ContentWrapper>
          )}

          <S.TagnIconsContainer
            style={{ width: images.length === 0 ? "" : "49.5%" }}
          >
            <S.TagWrapper>
              태그
              <TagInput onValueChange={onHashTagsChange} />
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
            </S.IconsContainer>
            <S.SubmitBtnWrapper>
              <Button variant="outlined" onClick={onSaveBtnClick}>
                작성
              </Button>
            </S.SubmitBtnWrapper>
          </S.TagnIconsContainer>
        </>
      ) : (
        // 수정하기
        <>
          <S.TitleWrapper>
            <TextField
              id="outlined-multiline-flexible"
              label="제목"
              fullWidth
              onChange={onTitleChange}
              defaultValue={diary.title}
            />
          </S.TitleWrapper>
          <S.ContentWrapper>
            <TextField
              id="outlined-multiline-static"
              label="내용"
              multiline
              rows={15}
              fullWidth
              style={{ backgroundColor: "aliceblue" }}
              onChange={onContentChange}
              defaultValue={diary.content}
            />
            {diary.images?.length > 0 && (
              <S.PreviewnBtnContainer>
                <S.PreviewContainer>
                  <S.PrevButton onClick={prevPage} disabled={currentPage === 0}>
                    <ArrowBackIosNewRoundedIcon sx={{ fontSize: 40 }} />
                  </S.PrevButton>
                  <S.ImagePreview
                    src={diary?.images[currentPage]}
                    alt="preview"
                  />
                  <S.DeleteButton
                    onClick={() => handleImageDelete(currentPage)}
                  >
                    <DeleteIcon />
                  </S.DeleteButton>
                  <S.NextButton
                    onClick={nextPage}
                    disabled={currentPage === diary.images.length - 1}
                  >
                    <ArrowForwardIosRoundedIcon sx={{ fontSize: 40 }} />
                  </S.NextButton>
                </S.PreviewContainer>
              </S.PreviewnBtnContainer>
            )}
          </S.ContentWrapper>
          <S.TagnIconsContainer>
            <S.TagWrapper>
              태그
              <TagInput
                onValueChange={onHashTagsChange}
                hashtags={diary.hashtags}
              />
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
            </S.IconsContainer>
            <S.SubmitBtnWrapper>
              <Button variant="outlined" onClick={onEditBtnClick}>
                수정
              </Button>
            </S.SubmitBtnWrapper>
          </S.TagnIconsContainer>
        </>
      )}
    </S.InputContainer>
  );
};

export default AddEditDiaryPage;
