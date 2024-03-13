import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import * as S from "./SignupPage.styled";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [userPassword, setPassword] = useState("");

  const [signup, { userInfo, token }] = useSignupMutation();

  const onEmailChange = (e) => setEmail(e.target.value);
  const onpasswordChange = (e) => setPassword(e.target.value);
  const onNicknameChange = (e) => setNickname(e.target.value);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const saveCheck = [email, userPassword].every(Boolean) === true;

  const onSaveClick = async () => {
    if (saveCheck) {
      try {
        await signup({ email, userPassword, nickname });
        setEmail("");
        setPassword("");
        setNickname("");
        navigate("/login");
      } catch (err) {
        console.error("failed to signup", err);
      }
    } else {
      alert("필수항목을 확인해 주세요");
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailValid = (email) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!regex.test(email)) {
      return "이메일 형식을 확인해주세요";
    } else {
      return "올바른 이메일 형식입니다";
    }
  };

  return (
    <S.SignupContainer>
      <S.Signup>회원가입</S.Signup>
      <S.IdPwdContainer>
        <Divider>
          <Chip label="이메일 (필수)" size="Large" />
        </Divider>
        <S.TextBtnContainer>
          <FormControl
            fullWidth
            color="grey"
            sx={{ margin: "20px 0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-id">이메일</InputLabel>
            <OutlinedInput
              id="outlined-adornment-id"
              label="이메일"
              value={email}
              onChange={onEmailChange}
            />
          </FormControl>
          <S.Btn>이메일 중복 체크</S.Btn>
        </S.TextBtnContainer>
        <Divider>
          <Chip label="비밀번호 (필수)" size="Large" />
        </Divider>
        <FormControl
          fullWidth
          color="grey"
          sx={{ marginTop: "30px" }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            value={userPassword}
          >
            비밀번호
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={userPassword}
            onChange={onpasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="비밀번호"
          />
        </FormControl>

        {/* <FormControl
          fullWidth
          color="grey"
          sx={{ margin: "20px 0" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            비밀번호 확인
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={onpasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="비밀번호 확인"
          />
        </FormControl> */}
        <S.TextBtnContainer />
        <Divider>
          <Chip label="닉네임" size="Large" />
        </Divider>
        <FormControl
          fullWidth
          color="grey"
          sx={{ marginTop: "30px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-nickname" value={nickname}>
            닉네임
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-nickname"
            value={nickname}
            onChange={onNicknameChange}
            label="닉네임"
          />
        </FormControl>

        <S.SignupBtn type="button" onClick={onSaveClick}>
          회원가입
        </S.SignupBtn>
      </S.IdPwdContainer>
    </S.SignupContainer>
  );
};

export default SignUpPage;
