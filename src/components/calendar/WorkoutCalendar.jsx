import React, { useState } from "react";
import Calendar from "react-calendar";
import "./WorkoutCalendar.css";
import moment from "moment";

const WorkoutCalendar = ({ onDateChange, addContent }) => {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
    onDateChange(formattedDate); // 상위 컴포넌트로 날짜 전달
  };

  return (
    <Calendar
      onChange={handleDateChange}
      value={value}
      formatDay={(locale, date) => moment(date).format("D")}
      tileContent={addContent}
      //년 단위 이동 null
      next2Label={null}
      prev2Label={null}
      //다른 달 이어지는 날짜 보여주기
      showNeighboringMonth={false}
      maxDate={new Date()}
    ></Calendar>
  );
};

export default WorkoutCalendar;
