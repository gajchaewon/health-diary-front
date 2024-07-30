import React from "react";
import { NavLink } from "react-router-dom";

const NicknameToProfile = ({ currentUserId, diary }) => {
  return (
    <>
      {!currentUserId ? (
        <>
          <NavLink
            to={`/user/${diary.userId}/view`}
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
          {currentUserId === diary?.userId ? (
            <>
              <NavLink
                to="/mprof/view"
                style={{
                  textDecoration: "none",
                  color: "#444648",
                }}
              >
                {diary.nickname}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={`/user/${diary?.userId}/view`}
                style={{
                  textDecoration: "none",
                  color: "#444648",
                }}
              >
                {diary.nickname}
              </NavLink>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NicknameToProfile;
