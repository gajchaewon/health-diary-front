import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const TitleinCard = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  width: fit-content;
`;

export default function CardDiary({ diary }) {
  return (
    <Card sx={{ width: "350px", height: "400px", margin: "50px" }}>
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
      <CardMedia component="img" height="194" image="" alt="img" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" length={10}>
          {diary.content.length > 88 ? (
            <>{diary.content.substr(0, 88) + "..."}</>
          ) : (
            <>{diary.content}</>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
