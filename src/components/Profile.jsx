import React, { useEffect, useState } from "react";
import * as S from "./Profile.styled";
import { Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const isMyProfile = location.pathname === "/mprof/view";
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    const diary = location.state?.diary;
    setDiaryData(diary);
  }, [location.state?.diary]);

  return (
    <S.MyProfileContainer>
      {isMyProfile ? (
        <>
          <S.ProfileMenuContainer>
            <S.ProfileMenu>마이 프로필</S.ProfileMenu>
            <S.ProfileMenuBtn to="/mprof/view">프로필 보기</S.ProfileMenuBtn>
            <S.ProfileMenuBtn to="/mprof/edit">프로필 수정</S.ProfileMenuBtn>
            <S.ProfileMenuBtn to="/mprof/follow">
              팔로잉·팔로워
            </S.ProfileMenuBtn>
            <br></br>
            <S.ProfileMenu>커뮤니티</S.ProfileMenu>
            <S.ProfileMenuBtn to="/mprof/like">
              내가 좋아요한 일지
            </S.ProfileMenuBtn>
            <S.ProfileMenuBtn to="/mprof/comment">
              내 커뮤니티 댓글
            </S.ProfileMenuBtn>
          </S.ProfileMenuContainer>
          <S.ProfileComponenetWrapper>
            <Outlet />
          </S.ProfileComponenetWrapper>
        </>
      ) : (
        <>
          {diaryData ? (
            <>
              <S.ProfileMenuContainer>
                <S.ProfileMenu>프로필</S.ProfileMenu>
                <S.ProfileMenuBtn
                  to={`/user/${diaryData.userId}/view`}
                  state={{ diary: diaryData }}
                >
                  프로필 보기
                </S.ProfileMenuBtn>
                <S.ProfileMenuBtn
                  to={`/user/${diaryData.userId}/follow`}
                  state={{ diary: diaryData }}
                >
                  팔로잉·팔로워
                </S.ProfileMenuBtn>
                <br></br>
              </S.ProfileMenuContainer>
              <S.ProfileComponenetWrapper>
                <Outlet />
              </S.ProfileComponenetWrapper>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </S.MyProfileContainer>
  );
};

export default Profile;
