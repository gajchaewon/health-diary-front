import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCurrentUser } from "../../features/auth/authSlice";

const NicknameToProfile = ({ diary, userInfo }) => {
  const currentUserId = useSelector(selectCurrentUser)?.id;
  const userId = diary?.userId || userInfo?.id;
  const nickname = diary?.nickname || userInfo?.nickname;

  return (
    <>
      {!currentUserId ? (
        <>
          <NavLink
            to={`/user/${userId}/view`}
            style={{
              textDecoration: "none",
              color: "#444648",
            }}
          >
            {diary?.nickname}
          </NavLink>
        </>
      ) : (
        <>
          {currentUserId === userId ? (
            <>
              <NavLink
                to="/mprof/view"
                style={{
                  textDecoration: "none",
                  color: "#444648",
                }}
              >
                {nickname}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={`/user/${userId}/view`}
                style={{
                  textDecoration: "none",
                  color: "#444648",
                }}
              >
                {nickname}
              </NavLink>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NicknameToProfile;
