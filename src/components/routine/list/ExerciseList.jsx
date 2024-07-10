import React from "react";
import ExerciseCard from "../card/ExerciseCard";

const ExerciseList = ({ exercises, routineId }) => {
  return (
    <div>
      {exercises?.length > 0 ? (
        exercises
          ?.slice(0)
          .reverse()
          .map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} routineId={routineId} />
          ))
      ) : (
        <div>운동이 없습니다. 운동을 추가해 주세요.</div>
      )}
    </div>
  );
};

export default ExerciseList;
