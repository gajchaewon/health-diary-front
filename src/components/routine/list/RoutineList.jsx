import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import RoutineCard from "../card/RoutineCard";
import {
  selectRoutine,
  getAllRoutines,
} from "../../../features/routine/routineSlice";
import { useGetRoutinesQuery } from "../../../features/routine/routineApiSlice";

const RoutineList = () => {
  const dispatch = useDispatch();
  const routines = useSelector(selectRoutine);
  const { data: fetchRoutines, isLoading: getRoutinesLoading } =
    useGetRoutinesQuery();

  useEffect(() => {
    if (!getRoutinesLoading && fetchRoutines) {
      dispatch(getAllRoutines(fetchRoutines));
    }
  }, [fetchRoutines, dispatch, getRoutinesLoading]);

  return (
    <div>
      {routines?.length > 0 ? (
        routines
          ?.slice(0)
          .reverse()
          .map((routine) => <RoutineCard key={routine.id} routine={routine} />)
      ) : (
        <div>No routines available</div>
      )}
    </div>
  );
};

export default RoutineList;
