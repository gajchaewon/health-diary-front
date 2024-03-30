import React, { useEffect, useState } from "react";
import * as S from "./Homepage.styled";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DiaryCard from "../../components/DiaryCard.main";
import { useOutletContext } from "react-router-dom";
import { useGetAllDiariesQuery } from "../../features/diaries/diaryApiSlice";
import { getAllDiaries } from "../../features/diaries/diarySlice";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const { isLoggedIn } = useOutletContext();
  const [diaries, setDiaries] = useState([]);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllDiariesQuery();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(getAllDiaries({ ...data.content }));
      setDiaries(data.content);
    }
  }, [data, isLoading, dispatch]);

  return (
    <div>
      {/* 로그인, 운동일지 X */}
      <S.MyDiaryContainer>
        <S.MyDiaryLink to="my">나의 운동일지</S.MyDiaryLink>
        <S.CalendarDiaryContainer>
          <S.CalendarWrapper> 달력 </S.CalendarWrapper>
          {!isLoggedIn ? (
            <S.DiaryWrapper>
              {/* <S.AddDiaryBtn to="adddiary">
                <AddCircleRoundedIcon sx={{ fontSize: "90px" }} />
              </S.AddDiaryBtn> */}
              <S.LoginBtn to="login">로그인</S.LoginBtn>
            </S.DiaryWrapper>
          ) : (
            <S.DiaryWrapper>
              {/* 운동일지 O */}
              <DiaryCard title={"제목"} content={"내용"} />
            </S.DiaryWrapper>
          )}
        </S.CalendarDiaryContainer>
      </S.MyDiaryContainer>

      <S.CommunityContainer>
        <S.CommunityLink to="comm">커뮤니티</S.CommunityLink>
        <S.ListContainer>
          <List sx={{ width: "80%", margin: "30px 0" }}>
            {diaries &&
              diaries.slice(0, 6).map((diary) => (
                <div key={diary.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<S.DiaryTitle>{diary.title}</S.DiaryTitle>}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline", marginRight: "10px" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            fontSize="20px"
                          >
                            {diary.nickname}
                          </Typography>
                          {diary.content}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="fullWidth" component="li" />
                </div>
              ))}
          </List>
        </S.ListContainer>
      </S.CommunityContainer>
    </div>
  );
};

export default Homepage;
