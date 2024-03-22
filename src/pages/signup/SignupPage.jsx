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

const SignUpPage = () => {
  const { isLoggedIn } = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const [eValidmsg, setEValidationMessage] = useState("");
  const [pValidmsg, setPValidationMessage] = useState("");
  const [isEValid, setEValidation] = useState(false);
  const [isPValid, setPValidation] = useState(false);

  const [signup, { isLoading }] = useSignupMutation();

  const onpasswordChange = (e) => setPassword(e.target.value);
  const onNicknameChange = (e) => setNickname(e.target.value);

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

  const passwordValid = (e) => {
    setPasswordCheck(e.target.value);
    if (!(e.target.value === password)) {
      setPValidation(false);
      setPValidationMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setPValidation(true);
      setPValidationMessage("비밀번호가 일치합니다.");
    }
  };

  const saveCheck =
    [email, password, isEValid, isPValid].every(Boolean) === true;

  const onSaveClick = async () => {
    if (saveCheck) {
      try {
        const userData = await signup({ email, password, nickname }).unwrap();
        dispatch(signUp({ ...userData, nickname }));
        setEmail("");
        setPassword("");
        setNickname("");

        navigate("/login");
      } catch (err) {
        alert("failed to signup", err);
      }
    } else {
      if (email || password === true) {
        if (isEValid === false) {
          alert("이메일을 체크해주세요.");
        } else if (isPValid === false) {
          alert("비밀번호를 체크해주세요.");
        }
      } else {
        alert("필수항목을 작성해주세요.");
      }
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
              onChange={emailValid}
            />
          </FormControl>
          <S.Btn>이메일 중복 체크</S.Btn>
        </S.TextBtnContainer>
        <div
          style={{
            color: isEValid ? "black" : "red",
            marginBottom: "30px",
            marginTop: "-40px",
          }}
        >
          {eValidmsg}
        </div>
        <Divider>
          <Chip label="비밀번호 (필수)" size="Large" />
        </Divider>
        <FormControl
          fullWidth
          color="grey"
          sx={{ marginTop: "30px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            비밀번호
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
            label="비밀번호"
          />
        </FormControl>

        <FormControl
          fullWidth
          color="grey"
          sx={{ margin: "20px 0 0 0" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            비밀번호 확인
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPasswordCheck ? "text" : "password"}
            value={passwordCheck}
            onChange={passwordValid}
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
        <S.TextBtnContainer />
        <div
          style={{
            color: isPValid ? "black" : "red",
            marginBottom: "30px",
            marginTop: "-50px",
          }}
        >
          {pValidmsg}
        </div>
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
