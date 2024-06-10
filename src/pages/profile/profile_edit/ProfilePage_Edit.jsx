import React from "react";
import * as S from "./ProfilePage_Edit.styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProfilePageEdit = () => {
  const SaveClicked = () => {
    window.alert("변경된 내용을 저장하시겠습니까?");
  };
  return (
    <div>
      {console.log("수정페이지")}
      <S.Edit>프로필 수정</S.Edit>
      <S.EditContainer>
        <S.EditTitle>• 닉네임 수정</S.EditTitle>
        <S.NicknameContainer>
          <S.TextfieldWrapper>
            <TextField
              id="outlined-multiline-flexible"
              label="닉네임"
              placeholder="닉네임"
              fullWidth
            />
          </S.TextfieldWrapper>
          <Button variant="outlined">변경하기</Button>
        </S.NicknameContainer>
        <br></br>
        <S.EditTitle>• 자기소개 수정</S.EditTitle>

        <TextField
          id="outlined-multiline-flexible"
          label="자기소개"
          multiline
          rows={10}
          fullWidth
          placeholder="안녕하세요"
        />
        <br></br>
        <S.EditTitle>• 좋아하는 운동 수정</S.EditTitle>
        <TextField
          id="outlined-multiline-flexible"
          label="태그"
          placeholder="태그"
          fullWidth
        />
        <S.ButtonWrapper>
          <S.SaveBtn onClick={SaveClicked}>저장</S.SaveBtn>
        </S.ButtonWrapper>
      </S.EditContainer>
    </div>
  );
};

export default ProfilePageEdit;
