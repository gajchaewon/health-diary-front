import React from "react";
import * as S from "./Homepage.styled";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DiaryCard from "../components/DiaryCard.main";

const Homepage = () => {
  return (
    <div>
      {/* 로그인, 운동일지 X */}
      <S.MyDiaryContainer>
        <S.MyDiaryLink to="mydiary">나의 운동일지</S.MyDiaryLink>
        <S.CalendarDiaryContainer>
          <S.CalendarWrapper> 달력 </S.CalendarWrapper>
          <S.DiaryWrapper>
            <S.AddDiaryBtn to="adddiary">
              <AddCircleRoundedIcon sx={{ fontSize: "90px" }} />
            </S.AddDiaryBtn>
            <S.LoginBtn to="login">로그인</S.LoginBtn>
          </S.DiaryWrapper>
        </S.CalendarDiaryContainer>
      </S.MyDiaryContainer>
      {/* 운동일지 O */}
      <S.MyDiaryContainer>
        <S.CalendarDiaryContainer>
          <S.CalendarWrapper> 달력 </S.CalendarWrapper>
          <S.DiaryWrapper>
            <DiaryCard />
          </S.DiaryWrapper>
        </S.CalendarDiaryContainer>
      </S.MyDiaryContainer>
      <S.CommunityContainer>
        <S.CommunityLink to="comm">커뮤니티</S.CommunityLink>
        <S.ListContainer>
          <List sx={{ width: "80%", margin: "30px 0" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <S.DiaryTitle to="/comm/diaryId">Diary Details</S.DiaryTitle>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="20px"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <S.DiaryTitle to="/comm/diaryId">Diary Details</S.DiaryTitle>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="20px"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <S.DiaryTitle to="/comm/diaryId">Diary Details</S.DiaryTitle>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="20px"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <S.DiaryTitle to="/comm/diaryId">Diary Details</S.DiaryTitle>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="20px"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <S.DiaryTitle to="/comm/diaryId">Diary Details</S.DiaryTitle>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="20px"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <S.DiaryTitle to="/comm/diaryId">Diary Details</S.DiaryTitle>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="20px"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </S.ListContainer>
      </S.CommunityContainer>
    </div>
  );
};

export default Homepage;
