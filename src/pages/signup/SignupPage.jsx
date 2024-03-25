import React, { useState, useEffect } from "react";
import { useSignupMutation } from "../../features/auth/authApiSlice";
import { signUp } from "../../features/auth/authSlice";
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
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  useLazyEmailCheckQuery,
  useLazyNicknameCheckQuery,
} from "../../features/auth/authApiSlice";

const SignUpPage = () => {
  const { isLoggedIn } = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [isEValid, setEValidation] = useState(false);
  const [isPValid, setPValidation] = useState(false);
  const [isNValid, setNValidation] = useState(false);
  const [isPConfirmed, setPConfirmation] = useState(false);
  const [eDuplicate, setEDuplicate] = useState(Boolean);
  const [nDuplicate, setNDuplicate] = useState(Boolean);
  const [eValidmsg, setEValidationMessage] = useState("");
  const [pValidmsg, setPValidationMessage] = useState("");
  const [nValidmsg, setNValidationMessage] = useState("");
  const [pConfirmmsg, setPConfirmationMessage] = useState("");

  const [signup, { isLoading: signupLoading }] = useSignupMutation();
  const [emailTrigger] = useLazyEmailCheckQuery();
  const [nicknameTrigger] = useLazyNicknameCheckQuery();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordCheck = () =>
    setShowPasswordCheck((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  const emailValid = (e) => {
    setEmail(e.target.value); // 이메일 상태 업데이트
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!regex.test(e.target.value)) {
      setEValidation(false);
      setEValidationMessage("유효하지 않은 이메일 형식입니다.");
    } else {
      setEValidation(true);
      setEValidationMessage("유효한 이메일 형식입니다.");
    }
  };

  const onEDuplicateBtnClick = async (e) => {
    e.preventDefault();
    if (isEValid) {
      const response = await emailTrigger(email).unwrap(); // trigger의 결과를 기다림
      // 여기서 바로 response를 사용하여 조건 처리
      if (response === false) {
        window.alert("사용 가능한 이메일입니다.");
        setEDuplicate(true);
      } else if (response === true) {
        window.alert("이미 있는 이메일입니다.");
        setEDuplicate(false);
      }
    }
  };

  const passwordValid = (e) => {
    setPassword(e.target.value);
    let regex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9$@$!%*#?&]{8,15}$/;
    if (!regex.test(e.target.value)) {
      setPValidation(false);
      setPValidationMessage(
        "유효하지 않은 비밀번호 형식입니다. (영문, 숫자, 특수문자를 포함한 8~15자)"
      );
    } else {
      setPValidation(true);
      setPValidationMessage("유효한 비밀번호 입니다.");
    }
  };

  const passwordConfirm = (e) => {
    setPasswordCheck(e.target.value);
    if (!(e.target.value === password)) {
      setPConfirmation(false);
      setPConfirmationMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setPConfirmation(true);
      setPConfirmationMessage("비밀번호가 일치합니다.");
    }
  };

  const nicknameValid = (e) => {
    setNickname(e.target.value);
    let regex = /[가-힣a-zA-Z0-9]{1,12}$/;
    if (!regex.test(e.target.value)) {
      setNValidation(false);
      setNValidationMessage(
        "유효하지 않은 닉네임 형식입니다. (영문, 한글 1~12자)"
      );
    } else {
      setNValidation(true);
      setNValidationMessage("유효한 닉네임 입니다.");
    }
  };

  const onNDuplicateBtnClick = async (e) => {
    e.preventDefault();
    if (isNValid) {
      const response = await nicknameTrigger(nickname).unwrap();
      if (response === false) {
        window.alert("사용 가능한 닉네임입니다.");
        setNDuplicate(true);
      } else if (response === true) {
        window.alert("이미 있는 닉네임입니다.");
        setNDuplicate(false);
      }
    }
  };

  const saveCheck =
    [
      email,
      password,
      isEValid,
      isPValid,
      isNValid,
      eDuplicate,
      nDuplicate,
    ].every(Boolean) === true;

  const errCheck = () => {
    if (email === "") {
      alert("이메일을 확인해주세요");
    } else if (isEValid === false) {
      alert("이메일 유효성을 확인해주세요");
    } else if (eDuplicate === false) {
      alert("이메일 중복확인을 해주세요");
    } else if (password === "") {
      alert("비밀번호를 확인해주세요");
    } else if (isPValid === false) {
      alert("비밀번호 유효성을 확인해주세요");
    } else if (isPConfirmed === false) {
      alert("비밀번호 확인란을 확인해주세요");
    } else if (nickname === "") {
      alert("닉네임을 확인해주세요");
    } else if (isNValid === false) {
      alert("닉네임 유효성을 확인해주세요");
    } else if (nDuplicate === false) {
      alert("닉네임 중복확인을 해주세요");
    }
    // 닉네임 필수가 아닐때
    // } else if (nickname !== "") {
    //   if (isNValid === false) {
    //     alert("닉네임 유효성을 확인해주세요");
    //   } else {
    //     if (nDuplicate === false) {
    //       alert("닉네임 중복확인을 해주세요");
    //     }
    //   }
  };

  const onSaveClick = async () => {
    errCheck();
    if (saveCheck === true && !signupLoading) {
      try {
        const userData = await signup({ email, password, nickname }).unwrap();
        dispatch(signUp({ ...userData }));
        setEmail("");
        setPassword("");
        setNickname("");
        navigate("/login");
      } catch (err) {
        console.error("회원가입 실패:", err);
        alert("회원가입에 실패했습니다.");
      }
    } else if (signupLoading) {
      alert("회원가입 중입니다. 잠시만 기다려주세요.");
    }
  };

  return (
    <S.SignupContainer>
      <S.Signup>회원가입</S.Signup>
      <S.IdPwdContainer>
        {/* 이메일 */}
        <Divider>
          <Chip label="이메일 (필수)" size="Large" />
        </Divider>
        <S.TextBtnContainer>
          <FormControl fullWidth color="grey" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-id">이메일</InputLabel>
            <OutlinedInput
              id="outlined-adornment-id"
              label="이메일"
              value={email}
              onChange={emailValid}
            />
          </FormControl>
          <S.Btn onClick={onEDuplicateBtnClick} disabled={!isEValid}>
            이메일 중복 체크
          </S.Btn>
        </S.TextBtnContainer>
        <div
          style={{
            color: isEValid ? "black" : "red",
            marginBottom: "30px",
          }}
        >
          {eValidmsg}
        </div>

        {/* 비밀번호 */}
        <Divider>
          <Chip label="비밀번호 (필수)" size="Large" />
        </Divider>
        <S.TextBtnContainer>
          <FormControl fullWidth color="grey" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              비밀번호
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={passwordValid}
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
        </S.TextBtnContainer>
        <div
          style={{
            color: isPValid ? "black" : "red",
            fontSize: isPValid ? "16px" : "15px",
            marginBottom: "5px",
          }}
        >
          {pValidmsg}
        </div>

        {/* 비밀번호 확인 */}
        <S.TextBtnContainer>
          <FormControl
            fullWidth
            color="grey"
            sx={{ marginTop: "-10px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password-check">
              비밀번호 확인
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-check"
              type={showPasswordCheck ? "text" : "password"}
              value={passwordCheck}
              onChange={passwordConfirm}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordCheck}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="비밀번호 확인"
            />
          </FormControl>
        </S.TextBtnContainer>
        <div
          style={{
            color: isPConfirmed ? "black" : "red",
            marginBottom: "30px",
          }}
        >
          {pConfirmmsg}
        </div>

        {/* 닉네임 */}
        <Divider>
          <Chip label="닉네임" size="Large" />
        </Divider>
        <S.TextBtnContainer>
          <FormControl fullWidth color="grey" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-nickname" value={nickname}>
              닉네임
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-nickname"
              value={nickname}
              onChange={nicknameValid}
              label="닉네임"
            />
          </FormControl>
          <S.Btn onClick={onNDuplicateBtnClick} disabled={!isNValid}>
            닉네임 중복 체크
          </S.Btn>
        </S.TextBtnContainer>
        <div
          style={{
            color: isNValid ? "black" : "red",
            marginBottom: "30px",
          }}
        >
          {nValidmsg}
        </div>
        <S.SignupBtn type="button" onClick={onSaveClick}>
          회원가입
        </S.SignupBtn>
      </S.IdPwdContainer>
    </S.SignupContainer>
  );
};

export default SignUpPage;
