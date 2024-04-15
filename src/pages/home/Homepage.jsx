import React, { useEffect, useState } from "react";
import * as S from "./Homepage.styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Typography from "@mui/material/Typography";
import DiaryCard from "../../components/DiaryCard.main";
import { useOutletContext } from "react-router-dom";
import {
  useGetAllDiariesQuery,
  useGetMyDiariesQuery,
} from "../../features/diaries/diaryApiSlice";
import {
  getAllDiaries,
  getMyDiaries,
  selectCurrentDiaries,
  selectMyDiaries,
} from "../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const { isLoggedIn } = useOutletContext();
  const diaries = useSelector(selectCurrentDiaries);
  const myDiaries = useSelector(selectMyDiaries);
  const today = new Date().toISOString().slice(0, 10); // 오늘 날짜를 YYYY-MM-DD 형식으로 가져옵니다.
  const option = "DATE";
  const searchValue = today;
  const [page, setPage] = useState(0);

  const { data: allDiary, isLoading } = useGetAllDiariesQuery();
  const { data: todayDiary, isLoading: todayDiaryLoading } =
    useGetMyDiariesQuery({
      option,
      searchValue,
    });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !todayDiaryLoading && allDiary) {
      if (todayDiary) {
        dispatch(getMyDiaries([...todayDiary.content]));
      }
      dispatch(getAllDiaries([...allDiary.content]));
    }
  }, [allDiary, todayDiary, isLoading, todayDiaryLoading, dispatch]);

  return (
    <div>
      {/* 로그인, 운동일지 X */}
      {console.log(myDiaries)}
      <S.MyDiaryContainer>
        <S.MyDiaryLink to="my">나의 운동일지</S.MyDiaryLink>
        <S.CalendarDiaryContainer>
          <S.CalendarWrapper> 달력 </S.CalendarWrapper>
          {!isLoggedIn ? (
            <S.DiaryWrapper>
              <S.LoginBtn to="login">로그인</S.LoginBtn>
            </S.DiaryWrapper>
          ) : (
            <S.DiaryWrapper>
              {myDiaries && myDiaries.length !== 0 ? (
                <>
                  <DiaryCard
                    title={myDiaries[page].title}
                    content={myDiaries[page].content}
                  />
                  <S.PaginationContainer>
                    <S.PaginationButton
                      onClick={() => setPage(Math.max(page - 1, 0))}
                      disabled={page === 0}
                    >
                      이전
                    </S.PaginationButton>
                    <S.PaginationButton
                      onClick={() =>
                        setPage(Math.min(page + 1, myDiaries.length - 1))
                      }
                      disabled={page === myDiaries.length - 1}
                    >
                      다음
                    </S.PaginationButton>
                  </S.PaginationContainer>
                </>
              ) : (
                <S.AddDiaryBtn to="adddiary">
                  <AddCircleRoundedIcon sx={{ fontSize: "90px" }} />
                </S.AddDiaryBtn>
              )}
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
                      primary={
                        <S.DiaryTitle
                          to={`/diary/${diary.id}`}
                          state={{ diary: diary }}
                        >
                          {diary.title}
                        </S.DiaryTitle>
                      }
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
