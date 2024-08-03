import React from "react";
import { NavLink } from "react-router-dom";

const NicknameToProfile = ({ currentUserId, diary, userInfo }) => {
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
