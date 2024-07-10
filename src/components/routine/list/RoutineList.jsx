import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import RoutineCard from "../card/RoutineCard";
import {
  selectRoutines,
  getAllRoutines,
} from "../../../features/routine/routineSlice";
import { useGetRoutinesQuery } from "../../../features/routine/routineApiSlice";

const RoutineList = () => {
  // const dispatch = useDispatch();
  const routines = useSelector((state) => selectRoutines(state) || []);
  // const { data: fetchRoutines, isLoading: getRoutinesLoading } =
  //   useGetRoutinesQuery();

  // useEffect(() => {
  //   if (!getRoutinesLoading && fetchRoutines) {
  //     dispatch(getAllRoutines(fetchRoutines));
  //   }
  // }, [fetchRoutines, dispatch, getRoutinesLoading]);
  return (
    <>
      {console.log(routines)}
      {routines?.length > 0 ? (
        routines.map((routine) => (
          <RoutineCard key={routine.id} routine={routine} />
        ))
      ) : (
        <div>No routines available</div>
      )}
    </>
  );
};

export default RoutineList;
