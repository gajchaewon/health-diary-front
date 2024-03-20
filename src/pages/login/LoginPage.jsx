import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styled";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { logIn } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginCheck = [email, password].every(Boolean) === true;

  const onLoginBtnClick = async (e) => {
    e.preventDefault();
    if (loginCheck) {
      try {
        const userData = await login({ email, password }).unwrap();
        dispatch(logIn({ ...userData }));
        setEmail("");
        setPassword("");
        navigate("/");

        console.log("success");
      } catch (err) {
        console.log("fail");
        alert("failed to login", err);
      }
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <S.LoginContainer>
      <S.Login>로그인</S.Login>
      <S.IdPwdContainer>
        <FormControl fullWidth color="grey" sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-id"> 아이디 </InputLabel>
          <OutlinedInput
            id="outlined-adornment-id"
            label="아이디"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth color="grey" sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            비밀번호
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            label="Password"
          />
        </FormControl>
        <S.LoginBtn onClick={onLoginBtnClick}>로그인</S.LoginBtn>
        <S.SignUp to="/signup">회원가입</S.SignUp>
      </S.IdPwdContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
