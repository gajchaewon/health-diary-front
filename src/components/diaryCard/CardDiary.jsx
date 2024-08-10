import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import moment from "moment";
import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import RandomImage from "../RandomImage";

export const TitleinCard = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: fit-content;
`;

export default function CardDiary({ diary }) {
  const location = useLocation();

  // 경로에 따라 다른 스타일을 적용합니다.
  const cardStyle =
    location.pathname === `/user/${diary.userInfo.id}/diaries`
      ? {
          width: "300px",
          height: "350px",
          margin: "20px 15px",
          overflow: "hidden",
        }
      : { width: "350px", height: "400px", margin: "50px" };

  const textStyle =
    location.pathname === `/user/${diary.userInfo.id}/diaries`
      ? {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
        }
      : {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "3",
        };

  return (
    <Card sx={cardStyle}>
      <CardHeader
        avatar={
          <NavLink
            to={`/user/${diary.userInfo.id}/view`}
            state={{ diary: diary }}
            style={{
              textDecoration: "none",
              color: "#444648",
            }}
          >
            <Avatar sx={{ bgcolor: "#00aeff" }} title={diary.userInfo.nickname}>
              {diary.userInfo.nickname.charAt(0)}
            </Avatar>
          </NavLink>
        }
        title={
          <TitleinCard to={`/diary/${diary.id}`}>{diary.title}</TitleinCard>
        }
        subheader={moment(diary.createdAt).format("YYYY-MM-DD")}
      />

      {diary?.images.length > 0 ? (
        <CardMedia
          component="img"
          height="194"
          image={diary?.images[0]?.url}
          alt="img"
        />
      ) : (
        <CardMedia
          component="img"
          height="194"
          image={`/${RandomImage()}`}
          alt="img"
        />
      )}
      <CardContent
        sx={{
          height: "60px",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          length={10}
          sx={textStyle}
        >
          <>{diary.content}</>
        </Typography>
      </CardContent>
    </Card>
  );
}
