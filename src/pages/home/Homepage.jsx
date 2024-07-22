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
import DiaryCard from "../../components/diaryCard/DiaryCard.main";
import { useOutletContext, NavLink } from "react-router-dom";
import {
  useGetAllDiariesQuery,
  useLazyGetMyDiariesQuery,
} from "../../features/diaries/diaryApiSlice";
import { useDispatch } from "react-redux";
import WorkoutCalendar from "../../components/calendar/WorkoutCalendar";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import moment from "moment";

const Homepage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useOutletContext();
  //const myDiaries = useSelector(selectMyDiaries);
  const today = new Date().toISOString().slice(0, 10); // 오늘 날짜를 YYYY-MM-DD 형식으로 가져옵니다.
  const searchType = "DATE";
  const [searchValue, setSearchValue] = useState(today);
  const [page, setPage] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null); // 초기값을 오늘 날짜로 설정

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSearchValue(date);
  };

  const {
    data: fetchAllDiary,
    isLoading: allDiaryLoading,
    error,
  } = useGetAllDiariesQuery({ size: "", page: "" });

  const [
    selectedDateTrigger,
    { data: fetchDatedDiary, isLoading: myDiaryLoading, error: triggerError },
  ] = useLazyGetMyDiariesQuery();

  const [
    fetchDatesTrigger,
    { data: fetchDiaryDates, isLoading: diaryDatesLoading, error: dataError },
  ] = useLazyGetMyDiariesQuery();

  useEffect(() => {
    selectedDateTrigger({ searchType: searchType, searchValue: searchValue });
    fetchDatesTrigger({ searchType: searchType, searchValue: "" });
  }, [fetchDatedDiary, searchType, searchValue]);

  const allDiary = fetchAllDiary?.content;
  const datedDiary = fetchDatedDiary?.content;

  const dayList = fetchDiaryDates?.content?.map((diary) =>
    moment(diary.createdAt).format("YYYY-MM-DD")
  );

  //각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (
      dayList?.find((day, index) => day === moment(date).format("YYYY-MM-DD"))
    ) {
      contents.push(
        <div key={String(date)}>
          <FitnessCenterRoundedIcon sx={{ fontSize: "large" }} />
        </div>
      );
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

  return (
    <div>
      <S.MyDiaryContainer>
        <S.MyDiaryLink to="my/diaries">나의 운동일지·루틴</S.MyDiaryLink>
        <S.CalendarDiaryContainer>
          <S.CalendarWrapper>
            <WorkoutCalendar
              onDateChange={handleDateChange}
              addContent={addContent}
            />
          </S.CalendarWrapper>
          {!isLoggedIn ? (
            <S.DiaryWrapper>
              <S.LoginBtn to="login">로그인</S.LoginBtn>
            </S.DiaryWrapper>
          ) : (
            <S.DiaryWrapper>
              {datedDiary && datedDiary?.length !== 0 ? (
                <>
                  <DiaryCard
                    title={datedDiary[page]?.title}
                    content={datedDiary[page]?.content}
                    diaryId={datedDiary[page]?.id}
                  />
                  {fetchDatedDiary?.numberOfElements <= 1 ? (
                    <></>
                  ) : (
                    <>
                      <S.PaginationContainer>
                        <S.PaginationButton
                          onClick={() => setPage(Math.max(page - 1, 0))}
                          disabled={page === 0}
                        >
                          <ArrowBackIosNewRoundedIcon
                            sx={{ fontSize: "large" }}
                          />
                        </S.PaginationButton>
                        <S.PaginationButton
                          onClick={() =>
                            setPage(Math.min(page + 1, datedDiary.length - 1))
                          }
                          disabled={page === datedDiary.length - 1}
                        >
                          <ArrowForwardIosRoundedIcon
                            sx={{ fontSize: "large" }}
                          />
                        </S.PaginationButton>
                      </S.PaginationContainer>
                    </>
                  )}
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
            {allDiary &&
              allDiary.slice(0, 6).map((diary) => (
                <div key={diary.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar sx={{ margin: "10px 18px 15px 0" }}>
                      <Avatar alt="Remy Sharp" />
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
                            <NavLink
                              to={`/user/${diary.userId}/view`}
                              state={{ diary: diary }}
                              style={{
                                textDecoration: "none",
                                color: "#444648",
                              }}
                            >
                              {diary.nickname}
                            </NavLink>
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
