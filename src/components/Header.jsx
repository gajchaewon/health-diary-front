import React from "react";
import * as S from "./Header.styled";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutBtnClick = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      dispatch(logOut());
      window.alert("로그아웃 되었습니다.");
      navigate("/");
    } else {
      window.alert("로그아웃을 취소합니다.");
    }
  };

  return token ? (
    <S.Header>
      <S.HeaderLogo to="/">BODYTOK</S.HeaderLogo>
      <div>
        <S.HeaderProfile to="/mprof/view">profile</S.HeaderProfile>
        <S.HeaderLogout onClick={onLogoutBtnClick}>logout</S.HeaderLogout>
      </div>
    </S.Header>
  ) : (
    <S.Header>
      <S.HeaderLogo to="/">BODYTOK</S.HeaderLogo>
    </S.Header>
  );
};

export default Header;
