//baseUrl 만들어서 api 만들어놓기~

import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const fetchMyDiaries = axios
  .get("personalExerciseDiaries")
  .then(console.log("일지 fetch 완료"));
