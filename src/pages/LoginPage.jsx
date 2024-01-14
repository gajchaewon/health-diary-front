import React from "react";
import * as S from "./LoginPage.styled";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <S.LoginContainer>
      <S.Login>로그인</S.Login>
      <S.IdPwdContainer>
        <FormControl fullWidth color="grey" sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-id">ID</InputLabel>
          <OutlinedInput id="outlined-adornment-id" label="ID" />
        </FormControl>
        <FormControl fullWidth color="grey" sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.SignIn to="signin">회원가입</S.SignIn>
      </S.IdPwdContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
