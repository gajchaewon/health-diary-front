import React from "react";
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

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <S.SignupContainer>
      <S.Signup>회원가입</S.Signup>
      <S.IdPwdContainer>
        <Divider>
          <Chip label="아이디" size="Large" />
        </Divider>
        <S.TextBtnContainer>
          <FormControl
            fullWidth
            color="grey"
            sx={{ margin: "20px 0" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-id">아이디</InputLabel>
            <OutlinedInput id="outlined-adornment-id" label="아이디" />
          </FormControl>
          <S.Btn>아이디 중복 체크</S.Btn>
        </S.TextBtnContainer>
        <Divider>
          <Chip label="비밀번호" size="Large" />
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
          sx={{ margin: "20px 0" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            비밀번호 확인
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
            label="비밀번호 확인"
          />
        </FormControl>
        <S.SignupBtn to="/login">회원가입</S.SignupBtn>
      </S.IdPwdContainer>
    </S.SignupContainer>
  );
};

export default LoginPage;
