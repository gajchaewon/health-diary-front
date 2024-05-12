import React from "react";
import * as S from "./Header.styled";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../features/auth/authApiSlice";

const Header = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutTrigger, { isLoading }] = useLazyLogoutQuery();

  const onLogoutBtnClick = async () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      await logoutTrigger();
      dispatch(logOut());
      window.alert("로그아웃 되었습니다.");
      navigate("/");
    } else {
      window.alert("로그아웃을 취소합니다.");
    }
  };

  return isLoggedIn ? (
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
