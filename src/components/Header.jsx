import React from "react";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo to="/">BODYTOK</S.HeaderLogo>
      <S.HeaderProfile to="mprof/view">🐥</S.HeaderProfile>
    </S.Header>
  );
};

export default Header;
