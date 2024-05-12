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
    await logoutTrigger();
    dispatch(logOut());
    navigate("/");
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
